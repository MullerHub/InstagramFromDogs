import React from 'react'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import { COMMENT_POST } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoComments.module.css '


const PhotoCommentsForm = ({id}) => {
  const [comment, setComment] = React.useState('')
  const { request, error } = useFetch()

  async function handlesubmit(event) {
    event.preventDefault()
    const { url, option } = COMMENT_POST(id, {comment})
    await request(url, option)
  }

  return (
    <form onSubmit={handlesubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="comente..." // ajustar o plcaholder com uma label por cima do textarea/formulario
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  )
}

export default PhotoCommentsForm
