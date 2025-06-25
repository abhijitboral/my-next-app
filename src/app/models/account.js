import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    account_id: { type: Number, required: true },
    limit: { type: Number, required: true },
    products: { type: Array, required: true },
});

const Account = mongoose.models.accounts || mongoose.model("accounts", accountSchema);

export default Account;
