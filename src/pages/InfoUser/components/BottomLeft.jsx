import React from 'react'

export default function BottomLeft(props) {
    const { name, phone, birthday, skill, certification } = props?.jobInfo

    const renderContent = (list) => {
        return list?.map((ele, indx) => {
            return <p key={indx}>{ele}</p>
        })
    }
    return (
        <>
            <div className="decription item">
                <div className='item-top'>
                    <h4>Decription</h4>
                    <div className='pencil' onClick={() => props?.showModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                    </div>
                </div>
                <div className='item-bottom'>
                    <div className='content'>
                        <span>Name:</span><span>{name}</span>
                    </div>
                    <div className='content'>
                        <span>Phone:</span><span>0{phone}</span>
                    </div>
                    <div className='content'>
                        <span>Birthday:</span><span>{props?.convertDateFormat(birthday, "DD-MM-YYYY", "DD-MM-YYYY")}</span>
                    </div>
                </div>
            </div>
            <div className="languages item">
                <h4>Languages</h4>
                <p>English - <span>Basic</span></p>
                <p>Vietnamese (Tiếng Việt) - <span>Native/Bilingual</span></p>
            </div>
            <div className="skills item">
                <h4>Skills</h4>
                {renderContent(skill)}
            </div>
            <div className="education item">
                <h4>Education</h4>
                <p>CYBERSOFT</p>
            </div>
            <div className="certification item">
                <h4>Certification</h4>
                {renderContent(certification)}
            </div>
            <div className="linked item">
                <h4>Linked Account</h4>
                <ul>
                    <li>
                        <i className="fa-brands fa-facebook" />
                        <span>Facebook</span>
                    </li>
                    <li>
                        <i className="fa-brands fa-google" />
                        <span>Google</span>
                    </li>
                    <li>
                        <i className="fa-brands fa-github" />
                        <span>Github</span>
                    </li>
                    <li>
                        <i className="fa-brands fa-twitter" />
                        <span>Twitter</span>
                    </li>
                    <li>
                        <i className="fa-brands fa-audible" />
                        <span>Drible</span>
                    </li>
                    <li>
                        <i className="fa-brands fa-stack-overflow" />
                        <span>Stack Overflow</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
