import { createPrivateTask } from '../iexec/createPrivateTask';

export const analyze_contract_mistake = (protectedData: string, country: string): string => {
  console.log('analyze_contract_mistake call', { country });

  const taskId = createPrivateTask('legal', protectedData, [country]);
  return (
    'Thank you, your contract analyze has been started, it will take few minutes. You can follow the progress here: https://genie.ai/task/' +
    taskId
  );
};

export const analyze_financial_statement = (protectedData: string, country: string): string => {
  console.log('analyze_financial_statement call', { country });

  const taskId = createPrivateTask('legal', protectedData, [country]);
  return (
    'Thank you, your contract financial analyze has been started, it will take few minutes. You can follow the progress here: https://genie.ai/task/' +
    taskId
  );
};

export const analyze_medical_symptom = (protectedData: string, age: string): string => {
  console.log('analyze_medical_symptom call', { age });

  const taskId = createPrivateTask('legal', protectedData, [age]);
  return (
    'Thank you, your contract analyze has been started, it will take few minutes. You can follow the progress here: https://genie.ai/task/' +
    taskId
  );
};
