import express from 'express';
import {
    checkBroadcastsStatus,
    checkMessagesStatus,
    deleteUser,
    fetchUsers,
    getUser,
    getUsers,
    markBroadcastsAsRead,
    markMessagesAsRead,
    signout,
    test,
    toggleUserStatus,
    updateUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);
router.get('/checkbroadcastsstatus/:id', checkBroadcastsStatus);
router.get('/checkmessagesstatus/:id', checkMessagesStatus);
router.post('/markbroadcastsasread/:id', markBroadcastsAsRead);
router.post('/markmessagesasread/:id', markMessagesAsRead);
router.post('/fetchusers',fetchUsers);
router.post("/toggleuserstatus/:id", toggleUserStatus);


export default router;