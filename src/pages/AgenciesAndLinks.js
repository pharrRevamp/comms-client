import React from 'react'

function AgenciesAndLinks() {
  return (
    <div className='agenciesAndLinks'>
        <h2>Agencies</h2>
        <div className='agencyLogos'></div>
        <h2>Links</h2>
        <div className='agencyLinks'>
            <ul>
                <li><a href="http://www.txapco.org/" target="_blank" noreferrer>Texas APCO Chapter</a></li>
                <li><a href="https://www.texasnena.org/" target="_blank" noreferrer>Texas NENA Chapter</a></li>
                <li><a href="https://www.apcointl.org/" target="_blank" noreferrer>APCO</a></li>
                <li><a href="https://www.nena.org/" target="_blank" noreferrer>NENA</a></li>
                <li><a href="http://www.emergencydispatch.org/" target="_blank" noreferrer>NAED</a></li>
                <li><a href="https://www.lrgvdc911.org/" target="_blank" noreferrer>LRGVDC 9-1-1</a></li>
                <li><a href="https://www.tcole.texas.gov/" target="_blank" noreferrer>TCOLE</a></li>
                <li><a href="http://www.tx-tert.org/" target="_blank" noreferrer>TX TERT</a></li>
                <li><a href="http://www.911pets.org/" target="_blank" noreferrer>PETS</a></li>
                <li><a href="http://texas911trainers.org/" target="_blank" noreferrer>TNT</a></li>
                <li><a href="https://www.preparingtexas.org/" target="_blank" noreferrer>Preparing Texas</a></li>
                <li><a href="https://www.fema.gov/" target="_blank" noreferrer>FEMA</a></li>
            </ul>
        </div>        
    </div>
  )
}

export default AgenciesAndLinks;