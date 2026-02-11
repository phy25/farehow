const { z } = require("zod");
const { fromZodError } = require("zod-validation-error");

const agencySchema = z
  .object({
    layout: z.string(),
    title: z.string(),
    agency_url: z.string().url(),
    support_openloop: z.boolean(),
    support_qrcode: z.boolean(),
    support_cash: z.boolean(),
    support_openloop_passback: z.boolean(),
    transfer_is_unlimited_within_time: z.boolean(),
    transfer_time_limit_min: z.number().int().nonnegative(),
    requires_tap_off: z.boolean(),
    prepaid_card_fee: z.number().int().nonnegative().nullable()
  })
  .passthrough();

module.exports = {
  eleventyDataSchema: function(data) {
    const result = agencySchema.safeParse(data);

    if (result.error) {
      throw fromZodError(result.error);
    }
  }
};
