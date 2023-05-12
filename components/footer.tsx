import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-footer border-t border-accent-2 text-gray-800 py-5 font-light">
      <Container>
        {/* <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div> */}
        <ul className="flex flex-col gap-7 lg:flex-row justify-between mb-5">
          <li className="flex flex-col gap-3">
            <p className="text-2xl">Акушерский стационар</p>
            <div className="flex gap-2 items-center">
              <img src="/img/location.png" alt="" className="w-5 h-5" />
              <a
                href="https://2gis.ru/irkutsk/firm/1548640652888461/104.272004%2C52.288703?m=104.275251%2C52.288245%2F17.05"
                target="_blank"
              >
                г. Иркутск, ул. Сурикова 16
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/phone-call.png" alt="" className="w-5 h-5" />
              <a href="tel:+73952242879">+7 (3952) 24-28-79</a>
            </div>
          </li>
          <li className="flex flex-col gap-3">
            <p className="text-2xl">Гинекологическое отделение</p>
            <div className="flex gap-2 items-center">
              <img src="/img/location.png" alt="" className="w-5 h-5" />
              <a
                href="https://2gis.ru/irkutsk/firm/1548640652888832/104.285403%2C52.284298?m=104.285793%2C52.284034%2F19.03"
                target="_blank"
              >
                г. Иркутск, ул. Горького 36
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/phone-call.png" alt="" className="w-5 h-5" />
              <a href="tel:+73952242821">+7 (3952) 24-28-21</a>
            </div>
          </li>
          <li className="flex flex-col gap-3">
            <p className="text-2xl">Консультативно-диагностическое отделение</p>
            <div className="flex gap-2 items-center">
              <img src="/img/location.png" alt="" className="w-5 h-5" />
              <a
                href="https://2gis.ru/irkutsk/firm/70000001041512803/104.285425%2C52.28396?m=104.285793%2C52.284034%2F19.03"
                target="_blank"
              >
                г. Иркутск, ул. Горького 36
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/img/phone-call.png" alt="" className="w-5 h-5" />
              <a href="tel:+73952200086">+7 (3952) 20-00-86</a>
            </div>
          </li>
        </ul>
        <div className="flex justify-between flex-col gap-7 lg:flex-row">
          <p className="text-center lg:text-right">
            ©&nbsp;ОГБУЗ&nbsp;"ИГПЦ",&nbsp;2023 | Все&nbsp;права&nbsp;защищены
            |&nbsp;
            <a
              href="https://irgpc.ru/about/politika-konfidenczialnosti/"
              target="_blank"
            >
              Политика&nbsp;конфиденциальности
            </a>
          </p>
          <ul className="flex gap-4 justify-center">
            <li>
              <a href="https://t.me/irgpc" target="_blank">
                <img src="/img/telegram.png" alt="" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://vk.com/irgpc" target="_blank">
                <img src="/img/vk.png" alt="" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCRIxEaZhw2v3dzG_jQDaL8g"
                target="_blank"
              >
                <img src="/img/youtube.png" alt="" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
