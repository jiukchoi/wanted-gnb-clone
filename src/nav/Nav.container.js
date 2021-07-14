import { useContext, useState } from "react"
import { GlobalContext } from "../../pages/_app"
import NavUI from "./Nav.presenter"

const Nav = () => {
  const { isMoblie } = useContext(GlobalContext)

  const TopbarMenu = ["탐색", "커리어 성장", "직군별 연봉", "이력서", "매치업", "프리랜서"]

  const SearchMenuTitle = ["영업", "미디어", "인사", "게임 제작", "금융"]

  const RightSearchMenuTitle = ["엔지니어링∙설계", "물류∙무역", "제조∙생산", "의료∙제약∙바이오", "교육", "법률∙법집행기관", "식∙음료", "건설∙시설", "공공∙복지"]

  const SearchMenuDetail = {
    "영업": ["기업영업", "외부영업", "영업 관리자", "기술영업", "주요고객사 담장자", "솔루션 컨설턴트", "해외영업"],
    "미디어": ["콘텐츠 크리에이터", "PD", "영상 편집가", "에디터", "비디오 제작", "작가", "출판 기획자"],
    "인사": ["인사담당", "리크루터", "조직문화", "평가∙보상", "헤드헌터", "HRD", "HRBP"],
    "게임 제작": ["게임 기획자", "게임 그래픽 디자이너", "모바일 게임 개발자", "게임 클라이언트 개발자", "게임 아티스트", "유니티 개발자", "게임 서버 개발자"],
    "금융": ["회계담당", "재무 담당자", "IR", "투자∙증권", "재무 분석가", "애널리스트", "내부통제 담당자"],
  }

  const [isSearchMenu, setIsSearchMenu] = useState(false)

  const onMouseOverMenuOn = () => {
    setIsSearchMenu(true)
  }

  const onMouseOverMenuOff = () => {
    setIsSearchMenu(false)
  }

  return <NavUI TopbarMenu={TopbarMenu} SearchMenuTitle={SearchMenuTitle} RightSearchMenuTitle={RightSearchMenuTitle} SearchMenuDetail={SearchMenuDetail} isSearchMenu={isSearchMenu} onMouseOverMenuOn={onMouseOverMenuOn} onMouseOverMenuOff={onMouseOverMenuOff} isMoblie={isMoblie} />
}
export default Nav