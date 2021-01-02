import db from './db';
import showToast from './toast';

const deleteData = async (id) => {
  try {
    await db.collection("budgets").doc(id).delete()
    showToast({ type: 'success', text: `removed budget item ${id}` });
  } catch (error) {
    showToast({ type: 'danger', text: error.message });    
  }
};

export default deleteData;
