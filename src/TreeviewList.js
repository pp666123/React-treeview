import './treeview.css';
import React, { useEffect } from 'react';

const courseData = [{
  name: "ooo：", html: <input></input>, value: ""
}, {
  name: "ooo：", html: <input></input>, value: ""
}, {
  name: "ooo：", html: <input></input>, value: ""
}, {
  name: "ooo：", html: <select></select>, value: ""
}, {
  name: "ooo：", html: <input></input>, value: ""
}, {
  name: "ooo：", html: <input></input>, value: ""
}];

const userData = [{
  name: "ooo：", html: <></>, value: ""
}, {
  name: "ooo：", html: <input></input>, value: ""
}, {
  name: "ooo：", html: <input></input>, value: ""
}, {
  name: "ooo：", html: <input></input>, value: ""
}, {
  name: "ooo：", html: <input></input>, value: ""
}];

const App = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="row">
        <div>
          <div className="group_dropdown_content">
            <div className="tree">
              <span className="root">
                <div className='mb-2'>XXX：
                  <select></select>
                </div>
                <ul className={`treeview-list`}>
                  {courseData.map(item => {
                    return (
                      <li>
                        <div className="node ms-2" >
                          {item.name}{item.value}{item.html}
                        </div>
                      </li>
                    )
                  })}
                  {userData.map(item => {
                    return (
                      <li className='user'>
                        <div className="node ms-2" >
                          {item.name}{item.value}{item.html}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div >
    </>
  )

}

export default App;