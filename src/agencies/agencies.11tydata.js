/**
 * Data schema validation for agency pages
 * Uses 11ty's built-in eleventyDataSchema feature (available in 11ty 3.0+)
 * 
 * This schema validates all frontmatter data for files in the agencies directory.
 * It ensures data consistency and helps catch errors during the build process.
 */
module.exports = {
  eleventyDataSchema: function(data) {
    // Skip schema validation for non-agency pages
    if (!data.page.inputPath.includes('/agencies/')) {
      return;
    }
    
    // Skip README files
    if (data.page.inputPath.includes('README')) {
      return;
    }

    const errors = [];

    // Required fields for all agency pages
    const requiredFields = {
      'layout': 'string',                              // Layout template to use (e.g., "agency.njk")
      'title': 'string',                               // Display name of the agency
      'permalink': 'string',                           // URL path for the page
      'support_emv_contactless': 'boolean',            // Whether contactless payment (credit/debit cards, mobile pay) is supported
      'support_qrcode': 'boolean',                     // Whether QR code tickets are supported
      'support_cash': ['boolean', 'string'],           // Whether cash is accepted (boolean or string for special cases like "Coins only on buses")
      'support_emv_contactless_passback_max': 'number', // Max number of people who can use the same contactless card
      'transfer_time_limit_min': 'number',             // Time limit for transfers in minutes (0 if no transfers)
      'requires_tap_off': 'boolean'                    // Whether tapping off is required at destination
    };

    // Optional fields that may be present
    const optionalFields = {
      'agency_url': 'string',                          // Official agency fare information URL
      'support_transit_card': 'boolean',               // Whether a proprietary transit card is available
      'transit_card_main_name': 'string',              // Name of the main transit card (e.g., "CharlieCard", "OMNY card")
      'transit_card_main_fee': 'number',               // Fee to obtain the transit card in dollars (0 if free)
      'transfer_is_unlimited_within_time': 'boolean',  // Whether unlimited transfers are allowed within time limit
      'requires_transfer_tap': 'boolean',              // Whether you need to tap when transferring
      'fare_capping_amount': 'string'                  // Description of fare capping (e.g., "12 trips / 7 days")
    };

    // Check required fields
    for (const [field, expectedType] of Object.entries(requiredFields)) {
      if (!(field in data)) {
        errors.push(`Missing required field: ${field}`);
      } else {
        const actualType = typeof data[field];
        if (Array.isArray(expectedType)) {
          // Multiple allowed types
          if (!expectedType.includes(actualType)) {
            errors.push(`Field '${field}' has wrong type. Expected one of ${expectedType.join(', ')}, got ${actualType}`);
          }
        } else if (actualType !== expectedType) {
          errors.push(`Field '${field}' has wrong type. Expected ${expectedType}, got ${actualType}`);
        }
      }
    }

    // Check optional fields if present
    for (const [field, expectedType] of Object.entries(optionalFields)) {
      if (field in data) {
        const actualType = typeof data[field];
        if (actualType !== expectedType) {
          errors.push(`Field '${field}' has wrong type. Expected ${expectedType}, got ${actualType}`);
        }
      }
    }

    // Validate transit card fields consistency
    if (data.support_transit_card === true) {
      if (!data.transit_card_main_name) {
        errors.push(`When support_transit_card is true, transit_card_main_name is required`);
      }
      if (data.transit_card_main_fee === undefined) {
        errors.push(`When support_transit_card is true, transit_card_main_fee is required`);
      }
    }

    // Validate passback_max is reasonable
    if (data.support_emv_contactless_passback_max < 1 || data.support_emv_contactless_passback_max > 10) {
      errors.push(`support_emv_contactless_passback_max should be between 1 and 10`);
    }

    // Validate transfer time limit
    if (data.transfer_time_limit_min < 0) {
      errors.push(`transfer_time_limit_min should be non-negative`);
    }

    // If there are errors, throw them
    if (errors.length > 0) {
      const errorMessage = `Data validation failed for ${data.page.inputPath}:\n  - ${errors.join('\n  - ')}`;
      throw new Error(errorMessage);
    }
  }
};
