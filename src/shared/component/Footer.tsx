import KaKaoTalk from '../../assets/footer/kakaotalk.svg';
import Instagram from '../../assets/footer/instagram.svg';
import Youtube from '../../assets/footer/youtube.svg';

const Footer = () => {
  return (
    <div className="bottom-0 w-full">
      <div className="mt-[150px] flex flex-col items-center justify-center gap-[20px]">
        <div className="text-[18px] text-[#505050]">홍익대학교 컴퓨터공학과 밴드 학회 큰소리</div>
        <div className="flex gap-2">
          <img
            style={imgStyle}
            src={KaKaoTalk}
            onClick={() => window.open('https://pf.kakao.com/_xmDfsn', '_blank')}
          />
          <img
            style={imgStyle}
            src={Instagram}
            onClick={() =>
              window.open('https://www.instagram.com/keunsori_1990?igsh=cW90Y2J6ZGp2MGkz', '_blank')
            }
          />
          <img
            style={imgStyle}
            src={Youtube}
            onClick={() => window.open('https://www.youtube.com/@keunsori_hongik', '_blank')}
          />
        </div>
        <div className="flex h-[80px] w-full items-center justify-center bg-[#f0f0f0]">
          <div className="text-[20px] text-[#505050]">
            Copyright ⓒ 2025 KEUN. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

const imgStyle = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};

export default Footer;
