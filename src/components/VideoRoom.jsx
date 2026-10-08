import React from 'react'
import {useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoRoom = () => {

  const {roomId} = useParams();

  const meeting  = async (element)=>{
    const appID = 975876943;
      const serverSecret = "01a7f6504804f6bf38586f1063322210";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),  "sandeep bhandari");
      const zc = ZegoUIKitPrebuilt.create(kitToken)
      zc.joinRoom({
        container :  element,
        sharedLinks:[
          {
          name: 'copy Link',
          url: `http://localhost:3000/room/${roomId}`
          }
        ],
        scenario :{
          mode : ZegoUIKitPrebuilt.OneONoneCall 
        }
  })

  }
  return (
    <div>
      {/* Room {roomId} */}
      <div ref={meeting}/>      
    </div>
  )
}

export default VideoRoom
