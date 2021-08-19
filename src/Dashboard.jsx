import React from "react";


const Dashboard = () => {
    return (
    <>
        <div class="container_dashboard">
		{/* <nav id="nav_dashboard"> navbar</nav> */}
            <div id="sidebar">
                    <div className="sidebar_heading">
                        <h1>Help Topics</h1>
                    </div>
                    
                    <div className="sidebar_links">
                        <a href="#">Why do I need an Extended Profile?</a>
                        <a href="#">Why should I answer Screening Questions?</a>
                        <a href="#">How do I know my Application status?</a>
                        <a href="#">Can I message a recruiter/hiring manager?</a>
                        <a href="#">How can the chatbot help me?</a>
                    </div>
            </div>

            <div id="sm_container">
                <div className="sm_heading">
                    <h2>
                    Follow Vasitum on Social Media
                    </h2>
                </div>

                <div className="sm_links">
                    <div className="sm_links"> <a href="https://www.facebook.com/vasitum/" target="_blank"> <img src="https://www.vasitum.com/static/images/social-media/facebook.svg" alt="sm_images" /> </a></div>
                    <div className="sm_links"> <a href="https://www.instagram.com/vasitum/" target="_blank"> <img src="https://www.vasitum.com/static/images/social-media/insta.svg" alt="sm_images" /> </a></div>
                    <div className="sm_links"> <a href="https://www.linkedin.com/company/vasitum/" target="_blank"> <img src="https://www.vasitum.com/static/images/social-media/linkedin.svg" alt="sm_images" /> </a></div>
                    <div className="sm_links"> <a href="https://www.youtube.com/channel/UCYbOspBTRIoFWUIFudkHVTw?reload=9" target="_blank"> <img src="https://www.vasitum.com/static/images/social-media/youtube.svg" alt="sm_images" /> </a></div>
                    <div className="sm_links"> <a href="https://twitter.com/Vasitum" target="_blank"> <img src="https://www.vasitum.com/static/images/social-media/twitter.svg" alt="sm_images" /> </a></div>
                </div>
            </div>

            <div id="resume_container">
                <div className="resume_heading">
                    <h2>
                        Updates for you
                    </h2>
                </div>

                <div className="resume_upload">
                    <div className="img_div">
                        <img src="https://www.vasitum.com/static/images/new-upload-resume.png"/>
                        <div className="img_size">
                            Upto 3MB
                        </div>
                    </div>
                    <div className="resume_div1"> "Upload Resume"
                        <div className="resume_div2">
                            "Supported files- .doc, .pdf, .docx, .rtf "
                        </div>
                    </div>
                    <div className="border_div">
                        <div className="resume_div3">
                            <div className="upload_now">
                                Upload Now
                            </div>
                        </div>
                    </div>
                    <input type="file" accept=".doc, .pdf, .docx, .rtf" title="upload resume" className="upload_file_btn"/>
                </div>

            </div>

            <div id="main">
                <p>jobs list container</p>
            </div>

            <div id="profile_container">
                <p> profile details container</p>
            </div>

	    </div>
    </>
    );
};

export default Dashboard;