import * as S from './styles';
export function Loader() {
  return (
    <S.LoaderContainer className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
    </S.LoaderContainer>
  );
}
