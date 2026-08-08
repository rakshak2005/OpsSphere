export type CustomerType = "WHOLESALE" | "RETAIL";
export type CustomerStatus = "LEAD" | "ACTIVE" | "INACTIVE";

export const CustomerTypeEnum = {
  WHOLESALE: "WHOLESALE" as CustomerType,
  RETAIL: "RETAIL" as CustomerType,
};

export const CustomerStatusEnum = {
  LEAD: "LEAD" as CustomerStatus,
  ACTIVE: "ACTIVE" as CustomerStatus,
  INACTIVE: "INACTIVE" as CustomerStatus,
};

export type MovementType = "IN" | "OUT";

export type ChallanStatus = "DRAFT" | "CONFIRMED" | "CANCELLED";

export const ChallanStatusEnum = {
  DRAFT: "DRAFT" as ChallanStatus,
  CONFIRMED: "CONFIRMED" as ChallanStatus,
  CANCELLED: "CANCELLED" as ChallanStatus,
};
