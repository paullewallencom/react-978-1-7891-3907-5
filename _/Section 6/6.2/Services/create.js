import db from './db';
import showToast from './toast';

const createData = (budget) => {
  db.collection("budgets").add(budget)
    .then(() => showToast({ type: 'success', text: 'budget updated' }))
    .catch((error) => showToast({ type: 'danger', text: error.message }));
};

export default createData;
