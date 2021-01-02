import db from './db';
import showToast from './toast';

const createData = async (budget) => {
  try {
    await db.collection("budgets").add(budget)
    showToast({ type: 'success', text: 'budget updated' });
    return true;
  } catch (error) {
    showToast({ type: 'danger', text: error.message });    
    return false;
  }
};

export default createData;
