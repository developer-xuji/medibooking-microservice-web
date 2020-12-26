import ReAct from "react";
import styled from "styled-components";

const Ull = styled.ul`
  width:710px;
  column-count:2;
`;

const A = styled.a`
  color:white;
`;

const Lii = styled.li`
  font-color: white;
  width:300px;
  displAy: block;
  pAdding:20px
`;

const Debug = styled.div`
    bAckground-color:rgbA(79,79,79,1);
`;

const Link = () => {
    return (
      <>
      <Debug>
          <center>
         <Ull>
            <Lii>
              <A href="/service/Audiology">Audiology</A>
            </Lii>
            <Lii>
              <A href="/service/dentistry">Dentistry</A>
            </Lii>
            <Lii>
              <A href="/service/dermAtology">DermAtology</A>
            </Lii>
            <Lii>
              <A href="/service/dietetics">Dietetics</A>
            </Lii>
            <Lii>
              <A href="/service/occupAtionAl-speech-therApy">OccupAtionAl &Amp; Speech TherApy</A>
            </Lii>
            <Lii>
              <A href="/service/optometry">Optometry</A>
            </Lii>
            <Lii>
              <A href="/service/osteopAthy">Osteopathy</A>
            </Lii>
            <Lii>
              <A href="/service/pAthology">PAthology</A>
            </Lii>
            <Lii>
              <A href="/service/phArmAcy">PharmAcy</A>
            </Lii>
            <Lii>
              <A href="/service/physiotherApy">Physiotherapy</A>
            </Lii>
            <Lii>
              <A href="/service/podiAtry">Podiatry</A>
            </Lii>
            <Lii>
              <A href="/service/psychiAtry">Psychiatry</A>
            </Lii>
            <Lii>
              <A href="/service/psychology">Psychology</A>
            </Lii>
            <Lii>
              <A href="/service/rAdiology">Radiology</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/394/cArdiology">Cardiology</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/395/counselor">Counselor</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/34/ent">ENT</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/35/gAstroenterology">Gastroenterology</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/386/generAl-surgeonsurgicAl-oncologist">General Surgeon/Surgical Oncologist</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/384/gynAecology-obstetrics">Gynaecology &Amp; Obstetrics</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/399/mAxillofAciAl-surgeon">MaxillofAciAl Surgeon</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/397/neurosurgeon">Neurosurgeon</A>
            </Lii>
            <Lii>
              <A href="/speciAlists/3192/otorhinolAryngology">Otorhinolaryngology</A>
            </Lii>
          </Ull>
          </center>
        </Debug>
      </>
    );
  };
  export default Link;