import express from "express";
import { deleteGroup, editGroupDesc, editGroupSupervisor, editGroupTitle, getDocument, getGroup, getGroups, insertDocumentation, insertGroup, insertProjectIdea, sendGroupMessage, submitweeklyprogress, updateGroup } from "../controllers/fyp.group.controller.js";
import multer from 'multer'
import fs from 'fs';
import path from 'path';
import { addNewFRs, deleteFR, fetchFRs, progressGrading, submitFRs, updateFRs } from "../controllers/fr.controller.js";
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const {id} = req.params;
        const dir = path.join( 'backend', 'uploads', id);

    // Create the directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
    },
    filename: (req, file, cb) => {
        const { type } = req.params;
        let fileKaNaam = ""
        switch (type) {
                case "Proposal":
                  fileKaNaam = "Proposal.pdf"
                  break;
                case "Defense":
                  fileKaNaam = "Defense.pdf"
                  break;
                case "Final Presentation":
                  fileKaNaam = "Final Presentation.pdf"
                  break;
                case "Documentation":
                 fileKaNaam = "Documentation.pdf"
                  break;
                default:
                    fileKaNaam = "NoName.pdf"
              }
      cb(null, fileKaNaam);
    },
  });
  
  const upload = multer({ storage: storage });

router.post("/documentationupload/:id/:type",upload.single('file'), insertDocumentation);
router.get("/getdocument/:id/:filename", getDocument);
router.post("/insertgroup", insertGroup);
router.get("/getgroups", getGroups);
router.put("/updategroup/:id", updateGroup);
router.post("/insertidea/:id", insertProjectIdea);
router.post("/submitweeklyprogress/:id", submitweeklyprogress);
router.post("/deletegroup/:id", deleteGroup);
router.get("/getgroup/:id",getGroup );
router.post("/editgrouptitle/:id", editGroupTitle);
router.post("/editgroupdesc/:id", editGroupDesc);
router.post("/editgroupsupervisor/:id", editGroupSupervisor);
router.post("/sendgroupmessage",sendGroupMessage );
router.post("/submitfrs",submitFRs );
router.post("/addnewfrs",addNewFRs );
router.post("/updatefrs",updateFRs );
router.post("/progressgrading",progressGrading );
router.post("/deletefr",deleteFR );
router.post("/fetchfrs",fetchFRs );

export default router;
