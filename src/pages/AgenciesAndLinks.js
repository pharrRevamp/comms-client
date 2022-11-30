import React from 'react'

function AgenciesAndLinks() {
  return (
    <div className='agenciesAndLinks'>
        <h2>Agencies</h2>
        <div className='agencyLogos'></div>
        <h2>Links</h2>
        <div className='agencyLinks'>
            <ul>
                <li><a href="http://www.txapco.org/" target="_blank" rel="noreferrer">Texas APCO Chapter</a></li>
                <li><a href="https://www.texasnena.org/" target="_blank" rel="noreferrer">Texas NENA Chapter</a></li>
                <li><a href="https://www.apcointl.org/" target="_blank" rel="noreferrer">APCO</a></li>
                <li><a href="https://www.nena.org/" target="_blank" rel="noreferrer">NENA</a></li>
                <li><a href="http://www.emergencydispatch.org/" target="_blank" rel="noreferrer">NAED</a></li>
                <li><a href="https://www.lrgvdc911.org/" target="_blank" rel="noreferrer">LRGVDC 9-1-1</a></li>
                <li><a href="https://www.tcole.texas.gov/" target="_blank" rel="noreferrer">TCOLE</a></li>
                <li><a href="http://www.tx-tert.org/" target="_blank" rel="noreferrer">TX TERT</a></li>
                <li><a href="http://www.911pets.org/" target="_blank" rel="noreferrer">PETS</a></li>
                <li><a href="http://texas911trainers.org/" target="_blank" rel="noreferrer">TNT</a></li>
                <li><a href="https://www.preparingtexas.org/" target="_blank" rel="noreferrer">Preparing Texas</a></li>
                <li><a href="https://www.fema.gov/" target="_blank" rel="noreferrer">FEMA</a></li>
            </ul>
        </div>        
    </div>
  )
}

export default AgenciesAndLinks;