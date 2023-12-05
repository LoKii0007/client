import React, { useState, useContext }  from 'react'
import AccountContext from '../context/accoountcontext'
import { setConversation } from '../service/api'

import "../css/chatdialog.css"

const ChatDialog = ({user}) => {

  const {setPerson , account} = useContext(AccountContext)
  const [clicked, setClicked] = useState("")

  const getUser= async ()=>{
    setPerson(user)
    await setConversation({senderId:account.sub, recieverId:user.sub})
    setClicked(user.sub)
  }

  return (
    <>
      <div onClick={()=>getUser()} className={`chat-item ${clicked?"clicked": ""} d-flex flex-row align-items-center`}>
        <div className="chat-profile mx-2">
          <img src={user.picture} alt="" />
        </div>
        <div className="chat-info py-2 d-flex flex-column mx-2">
          <div className="info-top d-flex flex-row justify-content-between align-items-center">
            <div className="chat-name">
              {user.name}
            </div>
            <div className="chat-time">
              12:36
            </div>
          </div>
          <div className="info-bottom d-flex flex-row justify-content-between align-items-center">
            <div className="chat-data">
              hemlo
            </div>
            <div className="unread-chat">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatDialog
