import React from 'react'
import { Link } from '../../navigation'

const TeamFooter = ({ closeMenu, name}) => {
  
    console.log("dataTeam")

  return (
     <Link id={team.id} image={team.image}  onClick={closeMenu} href="/">{name} </Link>
  )
}

export default TeamFooter