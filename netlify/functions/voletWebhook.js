const crypto = require('crypto');

exports.handler = async function (event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  try {
    console.log('Volet Webhook received:', event.body);

    // Parse the form data
    const formData = new URLSearchParams(event.body);
    const webhookData = {};
    
    for (const [key, value] of formData.entries()) {
      webhookData[key] = value;
    }

    console.log('Parsed webhook data:', webhookData);

    // Verify the webhook signature
    const receivedHash = webhookData.ac_hash;
    const calculatedHash = generateWebhookHash(webhookData);
    
    if (receivedHash !== calculatedHash) {
      console.error('Webhook signature verification failed');
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Invalid signature' }),
      };
    }

    console.log('Webhook signature verified successfully');

    // Process the payment based on status
    const transactionStatus = webhookData.ac_transaction_status;
    const orderId = webhookData.ac_order_id;
    const amount = webhookData.ac_amount;
    const currency = webhookData.ac_merchant_currency;

    console.log(`Processing payment for order ${orderId}: ${amount} ${currency} - Status: ${transactionStatus}`);

    if (transactionStatus === 'COMPLETED') {
      // Payment successful - activate access
      await processSuccessfulPayment(webhookData);
    } else if (transactionStatus === 'CANCELED') {
      // Payment cancelled
      await processCancelledPayment(webhookData);
    } else {
      // Other statuses (PENDING, PROCESS)
      console.log(`Payment ${orderId} is in ${transactionStatus} status`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Webhook processed successfully' }),
    };

  } catch (error) {
    console.error('Error processing Volet webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Internal server error' }),
    };
  }
};

/**
 * Generate SHA-256 hash for webhook verification
 */
function generateWebhookHash(data) {
  const sciPassword = process.env.VOLET_SCI_PASSWORD;
  
  const hashString = [
    data.ac_transfer,
    data.ac_start_date,
    data.ac_sci_name,
    data.ac_src_wallet,
    data.ac_dest_wallet,
    data.ac_order_id,
    data.ac_amount,
    data.ac_merchant_currency,
    sciPassword
  ].join(':');

  return crypto.createHash('sha256').update(hashString).digest('hex');
}

/**
 * Process successful payment
 */
async function processSuccessfulPayment(data) {
  const orderId = data.ac_order_id;
  const productType = data.course_type || data.vip_plan ? 'vip-signals' : 'course';
  const vipPlan = data.vip_plan || 'monthly';
  const buyerEmail = data.ac_buyer_email;
  const transactionId = data.ac_transfer;

  console.log(`Activating access for order ${orderId}:`, {
    productType,
    vipPlan,
    buyerEmail,
    transactionId
  });

  // Here you would typically:
  // 1. Update your database to mark the order as paid
  // 2. Send confirmation email to the buyer
  // 3. Grant access to the course/VIP signals
  // 4. Add user to Discord server if needed
  // 5. Send welcome materials

  // For now, we'll just log the successful payment
  console.log('Payment processed successfully:', {
    orderId,
    productType,
    vipPlan,
    buyerEmail,
    transactionId,
    amount: data.ac_amount,
    currency: data.ac_merchant_currency
  });

  // TODO: Implement actual access activation logic
  // - Send email with access details
  // - Add to Discord server
  // - Update user permissions
  // - Send course materials
}

/**
 * Process cancelled payment
 */
async function processCancelledPayment(data) {
  const orderId = data.ac_order_id;
  
  console.log(`Payment cancelled for order ${orderId}`);

  // Here you would typically:
  // 1. Update your database to mark the order as cancelled
  // 2. Send cancellation email to the buyer
  // 3. Clean up any temporary access

  console.log('Payment cancelled:', {
    orderId,
    amount: data.ac_amount,
    currency: data.ac_currency
  });
}
