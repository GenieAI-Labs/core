const lawyerFunctions = [
  {
    name: 'analyze_contract_mistake',
    description: 'process contract pdf and analyze for mistakes or potential issues',
    parameters: {
      type: 'object',
      properties: {
        country: {
          type: 'string',
          description: 'What is your country?',
        },
        dataProtected: {
          type: 'string',
          description: 'What is your dataProtected address?',
        },
      },
      required: ['dataProtected'],
    },
  },
];

const accountantFunctions = [
  {
    name: 'analyze_financial_statement',
    description: 'process csv file and analyze for mistakes',
    parameters: {
      type: 'object',
      properties: {
        country: {
          type: 'string',
          description: 'What is your country?',
        },
        dataProtected: {
          type: 'string',
          description: 'What is your dataProtected address?',
        },
      },
      required: ['dataProtected'],
    },
  },
];

const medicalFunctions = [
  {
    name: 'analyze_medical_symptom',
    description: 'Provide medical advice and information',
    parameters: {
      type: 'object',
      properties: {
        age: {
          type: 'string',
          description: 'What is your age?',
        },
        dataProtected: {
          type: 'string',
          description: 'What is your dataProtected address?',
        },
      },
      required: ['symptom'],
    },
  },
];
