import db from './db';
import showToast from './toast';

const readData = async () => {
  try {
    const data = await db.collection("budgets").get();
    const budgets = [];
    data.forEach((doc) => {
      const budgetItem = { ...doc.data(), id: doc.id };
      budgets.push(budgetItem)
    });    
    return budgets;
  } catch (error) {
    showToast({ type: 'danger', text: error.message });    
  }
};

export default readData;
  