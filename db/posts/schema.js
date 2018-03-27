import SimplSchema from 'simpl-schema';
import { nothing } from 'uniforms';

export default new SimplSchema({
    title: String,
    description: String,
    userId: {
        type: String,
        optional: true,
        uniforms: () => nothing
    },
    views: {
        type: Number,
        optional: true,
        defaultValue: 0,
        uniforms: () => nothing
    },
    createdAt: {
        type: Date,
        defaultValue: new Date(),
        optional: true,
        uniforms: () => nothing
    },
    type: {
        type: String,
        label: "Type",
        optional: false,
        required: true,
        allowedValues: [
            "Nature",
            "Psychology",
            "Music",
            "Programming",
            "Project Management",
            "Other"
        ],
        uniforms: {
            options: [{
                label: "Select type",
                value: ""
            }, {
                label: "Nature",
                value: "Nature"
            }, {
                label: "Psychology",
                value: "Psychology"
            }, {
                label: "Music",
                value: "Music"
            }, {
                label: "Programming",
                value: "Programming"
            }, {
                label: "Project Management",
                value: "Project Management"
            }, {
                label: "Other",
                value: "Other"
            }]
        }
    }
});