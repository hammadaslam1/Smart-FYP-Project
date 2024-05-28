import '../../styles/studentcomponentsstyles/addweeklyprogress.css'
const AddWeeklyProgress = () => {
    return ( 
        <div className='weeklyProgressMain'>
            <h1>Add Weekly Progress</h1>
            <p>Provide description of your previous task and next task respectively.</p>
            <div className="weeklyProgressDiv">
                <h3>Previous Task's Description</h3>
                <textarea className="weeklyTextArea" rows={8}></textarea>
                <h3>Next Task's Description</h3>
                <textarea className="weeklyTextArea" rows={8}></textarea>
                <br />
                <button className='weeklyProgressSubmitButton'>Submit</button>
            </div>
        </div>
     );
}
 
export default AddWeeklyProgress;