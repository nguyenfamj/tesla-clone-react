import React from 'react';
import { sideDatas } from '../../../data/productsList';
import { Link } from 'react-router-dom';
import { CloseButton } from './styled';
import { CloseWrapper } from './styled';
import './style.css';

function SideBar({ sideBarState, toggleSideBar }) {
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 z-50 flex flex-col p-10 overflow-y-auto list-none bg-white sidebar w-72 ${
        sideBarState == true ? `sideBarOn` : `sideBarOff`
      }`}
    >
      <CloseWrapper>
        <CloseButton
          src="/images/close.svg"
          onClick={() => {
            toggleSideBar();
          }}
        ></CloseButton>
      </CloseWrapper>
      {sideDatas.map((sideData) => {
        console.log(sideData);
        return (
          <li className="px-0 py-3">
            <Link className="montserrat-m font-14" to={sideData.href}>
              {sideData.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default SideBar;
