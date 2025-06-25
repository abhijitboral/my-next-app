import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    birthdate: { type: Date, required: true },
    email: { type: String, required: true },
    active: { type: Boolean, required: true },
    accounts: { type: Array, required: true },
    tier_and_details: { type: Object, required: true },
});

const Customer = mongoose.models.customers || mongoose.model("customers", customerSchema);

export default Customer;
