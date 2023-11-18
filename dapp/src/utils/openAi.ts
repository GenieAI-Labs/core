const lawyerFunctions = [];

const medicalFunctions = [
  {
    name: 'get_medical_advice',
    description: 'Provide general medical advice and information',
    parameters: {
      type: 'object',
      properties: {
        symptom: {
          type: 'string',
          description: 'Description of the symptom or medical concern',
        },
        history: {
          type: 'string',
          description: 'Brief medical history relevant to the symptom',
        },
      },
      required: ['symptom'],
    },
  },
];

const artistFunctions = [
  {
    name: 'get_artistic_feedback',
    description: 'Offer feedback on artwork and creative projects',
    parameters: {
      type: 'object',
      properties: {
        artwork_description: {
          type: 'string',
          description: 'Description of the artwork or creative project',
        },
        feedback_type: {
          type: 'string',
          enum: ['composition', 'color_use', 'technique', 'overall_impression'],
          description: 'Type of feedback requested',
        },
      },
      required: ['artwork_description'],
    },
  },
];
