import db from './db';
import showToast from './toast';

const updateData = async (id, updates) => {
  try {
    await db.collection("budgets").doc(id).update(updates)
    showToast({ type: 'success', text: `${JSON.stringify(updates)}` });
  } catch (error) {
    showToast({ type: 'danger', text: error.message });    
  }
};

export default updateData;
