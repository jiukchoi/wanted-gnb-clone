import { Wrapper, Logo, Topbar, TopbarNavButtonWrapper, TopbarNavButton, TopbarOptionWrapper, TopbarOption, Vr, ServiceButton, NavSearchMenu, NavSearchWrapper, ArrowButton, NavTitle, NavRemark, NavTitleWrapper,TopWrapper, Body, MainImg, NavSearchWrapperSub, TopbarOptionImg, NavSearchRightMenu, ShowMoreWrapper, MobileHeader, MobileWrapper, MobileSigninButton, MobileNavWrapper, MobileNavSubWrapper, MobileNav, MobileNavImg } from './Nav.styles'
import Head from 'next/head'

const NavUI = ({TopbarMenu, SearchMenuTitle, RightSearchMenuTitle, SearchMenuDetail, onMouseOverMenuOn, onMouseOverMenuOff, isSearchMenu, isMoblie}) => {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/362db53098.js" crossorigin="anonymous"></script>  
      </Head>
      {isMoblie && (
        <div style={{width: '100vw', overflow: 'hidden', position: 'fixed'}}>
          <MobileWrapper>
            <MobileHeader>
              <Logo>wanted</Logo>
              <MobileSigninButton>회원가입하기</MobileSigninButton>
            </MobileHeader>
            <MobileNavWrapper>
              <MobileNavSubWrapper>
                <MobileNav>홈</MobileNav>
                <MobileNav>탐색</MobileNav>
                <MobileNav>커리어 성장</MobileNav>
              </MobileNavSubWrapper>
              <MobileNavSubWrapper>
                <MobileNavImg>
                  <i aria-hidden className="fas fa-search"></i>
                </MobileNavImg>
                <MobileNavImg>
                  <i aria-hidden className="fas fa-bars"></i>
                </MobileNavImg>
              </MobileNavSubWrapper>
            </MobileNavWrapper>
            <Body>
              <MainImg isMoblie={isMoblie} src={'https://static.wanted.co.kr/images/newintro/mobile.webp'} />
            </Body>
          </MobileWrapper>
        </div>
      )}
      {!isMoblie && (
        <div style={{width: '100vw', overflow: 'hidden', position: 'fixed'}}>
          <TopWrapper>
            <Wrapper>
              <Topbar>
                <Logo>wanted</Logo>
                <TopbarNavButtonWrapper>
                  {TopbarMenu?.map((data, index) => 
                    index === 0
                    ? <TopbarNavButton onMouseOver={onMouseOverMenuOn} key={index}>{data}</TopbarNavButton>
                    : <TopbarNavButton onMouseOver={onMouseOverMenuOff} key={index}>{data}</TopbarNavButton>
                  )}
                </TopbarNavButtonWrapper>
                <TopbarOptionWrapper>
                  <TopbarOptionImg>
                    <i aria-hidden className="fas fa-search"></i>
                  </TopbarOptionImg>
                  <TopbarOption>회원가입/로그인</TopbarOption>
                  <Vr></Vr>
                  <ServiceButton>기업 서비스</ServiceButton>
                </TopbarOptionWrapper>
              </Topbar>
            </Wrapper>
          </TopWrapper>
          {isSearchMenu && (
            <NavSearchWrapper>
              <NavSearchWrapperSub>
                {SearchMenuTitle?.map((data, index)=> (
                  <NavSearchMenu key={index}>
                    <NavTitleWrapper>
                      <NavTitle>{data}</NavTitle>
                      <ArrowButton src="/arrow.png" />
                    </NavTitleWrapper>
                    {SearchMenuDetail[data]?.map((data,index) => 
                      <NavRemark key={index}>{data}</NavRemark>
                    )}
                    <ShowMoreWrapper>
                      <NavRemark>더보기</NavRemark>
                      <ArrowButton src="/arrow.png" />
                    </ShowMoreWrapper>
                  </NavSearchMenu>
                ))}
                <NavSearchRightMenu>
                  {RightSearchMenuTitle?.map((data,index)=> (
                    <NavTitleWrapper key={index}>
                      <NavTitle>{data}</NavTitle>
                      <ArrowButton src="/arrow.png" />
                    </NavTitleWrapper>
                  ))}
                </NavSearchRightMenu>
              </NavSearchWrapperSub>
            </NavSearchWrapper>
          )}
          <Body onMouseOver={onMouseOverMenuOff} isSearchMenu={isSearchMenu} >
            <MainImg src={'https://static.wanted.co.kr/images/newintro/pc.webp'} />
          </Body>
        </div>
      )}
    </>
  )
}
export default NavUI
