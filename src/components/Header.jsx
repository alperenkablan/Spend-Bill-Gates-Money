import {useState} from 'react'
import "./header.style.css"
import {moneyFormat} from '../helpers';

function Header({total, money}) {
	return (
		<>
			{total > 0 && money - total !== 0 && (
				<div className="header">Harcayacak <span>$ {moneyFormat(money - total)}</span> paranız kaldı!</div>
			)}
			{total === 0 && (
				<div className="header">Harcamak için <span>$ {moneyFormat(money)}</span> paranız var!</div>
			)}
			<style jsx>{`
              
			`}</style>
		</>
	)
}

export default Header