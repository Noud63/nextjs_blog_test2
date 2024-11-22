import React from 'react'
import Image from 'next/image';

const LeesDitEerstPage = () => {
  return (
    <div className="mx-4">
      <div className="mx-auto mt-[20px] w-full max-w-[620px] flex-col rounded-lg border-2 p-4">
        <div className="mb-4 flex justify-center border-b pb-4 text-lg font-semibold text-white">
          <span>Regels voor online posten</span>
        </div>
        <div className="mb-4 text-white">
          U kunt uw meningen, kritische geluiden, afbeeldingen en opmerkingen via dit platform
          met ons delen. Om dit voor iedereen prettig te houden, vragen we u
          vriendelijk om u aan de volgende huisregels te houden:
        </div>
        <div className="px-4 text-white">
          <ul className="list-disc">
            <li>
              Ga netjes met elkaar om op dit platform. Bedreigen, schelden,
              hatelijk gedrag en kwetsen is op dit platform niet gewenst.
            </li>
            <li>
              Respecteer elkaars mening en privacy. Deel geen publiekelijke en
              privacygevoelige informatie.
            </li>
            <li>
              Plaatst u meer dan één keer ongepaste berichten op dit platform?
              Dan kunnen we u als gebruiker blokkeren.
            </li>
            <li>
              Voldoet uw bericht niet aan deze regels? Dan mogen wij uw bericht
              verwijderen.
            </li>
          </ul>
        </div>

        <div className="flex justify-center my-8">
          <Image src={"/icons/respect.png"} alt="respect" width={60} height={60} />
        </div>
      </div>
    </div>
  );
}

export default LeesDitEerstPage;
