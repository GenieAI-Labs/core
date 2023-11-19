import { createPrivateTask } from '../iexec/createPrivateTask';

export const analyze_contract_mistake = async (
  protectedData: string,
  country: string,
): Promise<string> => {
  console.log('analyze_contract_mistake call', { country });

  const taskId = await createPrivateTask('legal', protectedData, [country]);
  return (
    'Thank you, your contract analyze has been started, it will take few minutes. You can follow the progress here: https://genie.ai/task/' +
    taskId
  );
};

export const analyze_financial_statement = async (
  protectedData: string,
  country: string,
): Promise<string> => {
  console.log('analyze_financial_statement call', { country });

  const taskId = await createPrivateTask('legal', protectedData, [country]);
  return (
    'Thank you, your contract financial analyze has been started, it will take few minutes. You can follow the progress here: https://genie.ai/task/' +
    taskId
  );
};

export const analyze_medical_symptom = async (
  protectedData: string,
  age: string,
): Promise<string> => {
  console.log('analyze_medical_symptom call', { age });

  const taskId = await createPrivateTask('legal', protectedData, [age]);
  return (
    'Thank you, your contract analyze has been started, it will take few minutes. You can follow the progress here: https://genie.ai/task/' +
    taskId
  );
};
