import db from './db';
import showToast from './toast';

const readData = async () => {
  try {
    const data = await db.collection("budgets").get();
    const budgets = [];
    data.forEach((doc) => budgets.push(doc.data()));    
    return budgets;
  } catch (error) {
    showToast({ type: 'danger', text: error.message });    
  }
};

export default readData;
