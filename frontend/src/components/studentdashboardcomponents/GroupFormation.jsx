import '../../styles/studentcomponentsstyles/selectgroup.css'
const GroupFormation = () => {
    return ( 
        <div className='selectGroupMain'>
        <h1>Select Group</h1>
        <div className="selectGroupDiv">
            <div className="groupNameDiv">
                <label htmlFor="groupName">Group Name*</label>
                <br />
                <input className='groupNameInput' type="text" />
            </div>
            <br />
            <div className="ClassDiv">
                <label htmlFor="Class">Class*</label>
                <br />
                <select className='classSelect'>
                    <option value="">Select Class</option>
                    <option value="BSCS 7th Morning">BSCS 7th Morning</option>
                    <option value="BSIT 7th Evening">BSIT 7th Evening</option>
                </select>
            </div>
            <br />
            <div className="supervisiorDiv">
                <label htmlFor="Class">Choose Supervisor*</label>
                <br />
                <select  className='classSelect'>
                    <option value="">Select</option>
                    <option value="Ms. Farrah Aslam">Ms. Farrah Aslam</option>
                    <option value="Mr. Adil Waheed">Mr. Adil Waheed</option>
                    <option value="Prof. Imran Kazmi">Prof. Imran Kazmi</option>
                </select>
            </div>
            <br />
            <div className="membersDiv">
                <label htmlFor="Class">Note! Select Minimum 1 and Maximum 2 members for group (Select Multiple Members by Pressing CTRL + LEFT CLICK)</label>
                <br />
                <select  className='classSelect'>
                    <option value="">Select Students</option>
                    <option value="Ms. Farrah Aslam">Ms. Farrah Aslam</option>
                    <option value="Mr. Adil Waheed">Mr. Adil Waheed</option>
                    <option value="Prof. Imran Kazmi">Prof. Imran Kazmi</option>
                </select>
            </div>
            <button className='groupSubmitButton'>Submit</button>
        </div>
        </div>
     );
}
 
export default GroupFormation;