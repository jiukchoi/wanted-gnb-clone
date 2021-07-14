import styled from '@emotion/styled'

export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 1060px;
`
export const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`
export const Logo = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  width: 10%;
`
export const TopbarNavButtonWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TopbarNavButton = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid rgba(0,0,0,0.2);
  }
`
export const TopbarOptionWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TopbarOptionImg = styled.div` 
  cursor: pointer;
`
export const TopbarOption = styled.div`
  font-size: 14px;
  cursor: pointer;
`
export const Vr = styled.div`
  display: flex;
  height: 12px;
  border: 1px solid rgba(0,0,0,0.1);
`
export const ServiceButton = styled.button`
  width: 90px;
  height: 30px;
  border: 1px solid #bdbdbd;
  opacity: 0.7;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
`
export const NavSearchWrapper = styled.div`
  padding-top: 40px;
  width: 100vw;
  height: 325px;
  position: absolute;
  top: 50px;
  left: 0px;
  background-color: white;
  display: flex;
  justify-content: center;
  z-index: 1;
`
export const NavSearchWrapperSub = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
`
export const NavSearchMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 80px;
`
export const NavTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  width: 160px;
  cursor: pointer;
  padding-bottom: 10px;
`
export const NavTitle = styled.div`
`
export const ArrowButton = styled.img`
  width: 12px;
  height: 12px;
`
export const NavRemark = styled.div`
  width: 160px;
  cursor: pointer;
  font-size: 14px;
  color: rgba(0,0,0,0.5);
`
export const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  cursor: pointer;
`
export const NavSearchRightMenu = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
  font-weight: 500;
  overflow: hidden;
`
export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.isSearchMenu && 'rgba(0,0,0,0.6)'};
`
export const MainImg = styled.img`
  border-top: 1px solid #bdbdbd;
  width: 100vw;
  height: ${props => props.isMoblie ? '500px' : '550px'};
  object-fit: cover;
  mix-blend-mode: color;
  padding-top: ${props => props.isMoblie && '50px'};
`
export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
`
export const MobileSigninButton = styled.button`
  border: 1px solid #36f;
  color: #36f;
  border-radius: 17px;
  font-size: 14px;
  line-height: 32px;
  height: 34px;
  padding: 0 14px;
  background: none;
  cursor: pointer;
`
export const MobileNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MobileNavSubWrapper = styled.div`
  display: flex;
`
export const MobileNav = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-top: 14px;
  padding-bottom: 19px;
  padding-left: 20px;
  padding-right: 13px;
  cursor: pointer;
`
export const MobileNavImg = styled.div`
  width: 36px;
  padding: 14px 0;
  height: 100%;
  cursor: pointer;
`