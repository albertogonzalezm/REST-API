import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

TaskSchema.plugin(mongoosePaginate);
export default model("Task", TaskSchema);