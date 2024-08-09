import { useParams } from 'react-router-dom'

export default function Room() {
  const { roomId } = useParams()

  console.log(roomId);

  return (
    <div>Room: {roomId}</div>
  )
}

