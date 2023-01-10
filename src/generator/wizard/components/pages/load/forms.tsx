import React from "react";
import { LoadType } from "./types";
import Form from "../../../../../components/form/form";
import LoadDataInputForm from "./input";
import LoadDataFileForm from "./file";

type Props = {
  loadType: LoadType;
};

const LoadDataForms: React.VFC<Props> = ({ loadType }) => {
  return (
    <Form
      initialValues={{
        data: `[{"id":1450,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":193,"name":"Piotr Wiacek"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"Wymiana świetlówek w oprawach rastrowych (18W/840, długość ok 60cm) dla sufitów podwieszanych, laboratorium studenckie, 209-D10","description":"Proszę o wymianę zepsutych (nie świecących lub pulsujących) świetlówek w oprawie rastrowej w pomieszczeniu studenckiej pracowni elektronicznej: 209-D10.\\r\\nDefekt związany jest z jedną oprawą i jej wszystkimi czterema świetlówkami. ","start_date":"2022-09-29","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-09-29T14:03:30Z","updated_on":"2022-09-29T14:03:30Z","closed_on":null},{"id":1436,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":152,"name":"Piotr Gronek"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"Przebudowa węzła sieci komputerowej D-11","description":"Dzień dobry\\r\\n\\r\\nOtwieram zagadnienie dotyczące przebudowy węzła sieci komputerowej i telefonicznej, znajdującego się w korytarzu I. piętra pawilonu D-11. Obsługuje on wszystkie pomieszczenia na parterze i I. piętrze.\\r\\n\\r\\n* Skończyła się pojemność kanałów kablowych, nowych instalacji nie daje się już doprowadzić do węzła (np. z p. 107).\\r\\n* Zachodzi potrzeba usunięcia zbędnego starego okablowania i patch-paneli z szafy węzła.\\r\\n* Wykonawca sieci kablowych w remontowanych pomieszczeniach ma przygotować plan/kosztorys niezbędnych prac.\\r\\n* Zakres ewentualnych robót wymaga przerwy w działaniu sieci w D-11, po uzgodnieniu terminu z kierownictwem Katedry OiDC.\\r\\n\\r\\nDalsza dyskusja może się toczyć w tym wątku.\\r\\n\\r\\nPozdrawiam\\r\\nPiotr Gronek","start_date":"2022-09-23","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"73"}],"created_on":"2022-09-23T10:35:16Z","updated_on":"2022-09-23T10:35:16Z","closed_on":null},{"id":1434,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":9,"name":"Bartłomiej Rachwał"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"Nadmiarowe meble w pracowni dydaktycznej D-10 204","description":"Dzień dobry,\\r\\nChciałbym zaproponować by uporządkować pracownię D-10 204. Mamy tam niepotrzebne meble/biurka i pudło z monitora interaktywnego (które chcemy zachować). Niepotrzebnie to zagraca pracownię - załączam zdjęcie. \\r\\nByć może jesteśmy wstanie coś z tym zrobić? Nie wiem, kto ostatecznie za to odpowiada, dlatego dołączam szersze grono osób.\\r\\n\\r\\nBartek\\r\\n\\r\\n![](clipboard-202209231038-gssu0.png)\\r\\n","start_date":"2022-09-23","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-09-23T08:40:23Z","updated_on":"2022-09-23T10:37:32Z","closed_on":null},{"id":1433,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":9,"name":"Bartłomiej Rachwał"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"Awaria nowo zamontowanych rolet okiennych, D11 p. 121","description":"Załączam zdjęcie.\\r\\n\\r\\n![](clipboard-202209231026-0jiov.png)\\r\\n","start_date":"2022-09-23","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"73"}],"created_on":"2022-09-23T08:27:05Z","updated_on":"2022-09-23T08:27:05Z","closed_on":null},{"id":1413,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":152,"name":"Piotr Gronek"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"Serwis klimatyzatora Daikin w serwerowni D-10 207A","description":"Dzień dobry\\r\\n\\r\\nNastąpił  wyciek z instalacji odprowadzania skroplin z klimatyzatora DAIKIN w serwerowni D-10 207A (model duży, po prawej na tylnej ścianie).\\r\\nStwierdzono także zamulenie syfonu i rurek odprowadzających skropliny z klimatyzatorów (w obrębie przepierzenia z tyłu 207A).\\r\\nKlimatyzator jest wyłączony. Ponieważ nadal nie przewrócono działania sąsiedniego klimatyzatora, wskazane jest pilne przeprowadzenie prac serwisowych.\\r\\n\\r\\nPozdrawiam\\r\\nPiotr Gronek","start_date":"2022-09-16","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-09-16T11:06:37Z","updated_on":"2022-09-23T10:24:04Z","closed_on":null},{"id":1358,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":112,"name":"Jacek Niziol"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"Wymiana baterii kuchennej w pok.312","description":"Bateria przy zlewozmywaku w pok.312 obluzowała się i grozi uszkodzeniem wężyków doprowadzających wodę. Stało się tak, ponieważ ma zbyt nisko osadzoną wylewkę. Użytkownicy próbując nalać wodę do np. czajnika szarpali ją do góry. Ponowny montaż tej samej baterii nie rozwiąże problemu.  Proszę wymienić baterię na inną, z wysoką wylewką, najlepiej giętką, taką jak na załączonym przykładowym zdjęciu. Kolor wylewki szary lub grafit. Aktualnie w Castoramie taka bateria firmy Ferro kosztuje ok. 130 złotych. \\r\\nProszę także sprawdzić wężyki doprowadzające bieżącą wodę do baterii czy nie zostały uszkodzone przez blachę zlewozmywaka.","start_date":"2022-07-21","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-07-21T09:41:15Z","updated_on":"2022-07-21T09:41:15Z","closed_on":null},{"id":1228,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":100,"name":"Jakub Haberko"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"Zacięta lewa roleta w p. 316A","description":"Dzień dobry,\\r\\nChcę zgłosić problem z lewą roletą w p. 316A: zacięła się, nie da się jej ani opuścić, ani podnieść. Ponadto roleta ma urwany łańcuszek - stało się to, gdy próbowałem ją podnieść. Roleta jest jeszcze nowa, na pewno na gwarancji.\\r\\nPozdrawiam\\r\\nJakub Haberko","start_date":"2022-05-30","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-05-30T08:22:00Z","updated_on":"2022-06-06T08:19:50Z","closed_on":null},{"id":1192,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":185,"name":"Tomasz Chwiej"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"ZEPSUTA KILMATYZACJA W SALI 30  A W BUDYNKU D10","description":"W sali 30A w budynku D10 nie dziala klimatyzacja. \\r\\nProblem zglaszalem 22 kwietnia i do tej pory nie zostal rozwiazany.","start_date":"2022-05-16","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-05-16T09:50:18Z","updated_on":"2022-05-16T09:50:43Z","closed_on":null},{"id":1170,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":158,"name":"Marek Idzik"},"assigned_to":{"id":252,"name":"Roman Bonczarowski"},"subject":"Doprowadzenie internetu do pokoju 216","description":"W p. 216 są tylko 2 gniazdka internetowe, a pracują tam 3 osoby.\\r\\nProszę o doprowadzenie co najmniej 2 dodatkowych gniazdek.\\r\\n  ","start_date":"2022-05-05","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-05-05T12:24:54Z","updated_on":"2022-05-05T12:24:54Z","closed_on":null},{"id":1119,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":108,"name":"Agnieszka Oblakowska-Mucha"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"brak funkcji uchyłu w oknie D11","description":"jedno ze skrzydeł nowych okien w 106/D11 wypada w trybie uchyłu, wymagana regulacja","start_date":"2022-04-14","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"73"}],"created_on":"2022-04-14T08:50:51Z","updated_on":"2022-04-19T07:44:55Z","closed_on":null},{"id":872,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":208,"name":"Grzegorz Golaszewski"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Klimatyzacja w p. 231 D-10","description":"W pokoju 231 nie ma pilota do klimatyzacji oraz brakuje osłony przewodów klimatyzacji.","start_date":"2022-03-30","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-03-30T18:32:44Z","updated_on":"2022-04-01T07:55:29Z","closed_on":null},{"id":850,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":9,"name":"Zatwierdzone"},"priority":{"id":2,"name":"Normal"},"author":{"id":37,"name":"Malgorzata Krawczyk"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Gołębie","description":"Dzień dobry,\\r\\nuprzejmie proszę o zamontowanie systemu uniemożliwiającego gołębiom przesiadywanie na filarach przy balkonie w budynku D7. Z nadejściem wiosny zauważyliśmy, że pojawił się problem, słupy już są zabrudzone.\\r\\n\\r\\nPozdrawiam,\\r\\nMałgorzata Krawczyk i Przemysław Gawroński","start_date":"2022-03-29","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"72"}],"created_on":"2022-03-29T10:04:24Z","updated_on":"2022-04-01T07:53:52Z","closed_on":null},{"id":849,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":39,"name":"Katarzyna Matusiak"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Migająca lampa w pokoju 217 d7","description":"Dzień dobry,\\r\\n\\r\\nproszę o naprawę/wymianę lampy sufitowej (środkowy panel) w pokoju 217 budynek d-7. Lampa miga w losowo wybranych momentach.\\r\\n\\r\\nPozdrawiam,\\r\\nKatarzyna Matusiak","start_date":"2022-03-29","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"72"}],"created_on":"2022-03-29T09:07:59Z","updated_on":"2022-04-01T07:53:38Z","closed_on":null},{"id":848,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":160,"name":"Jadwiga Kalinowska"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"uszkodzone okno w p. 324","description":"w dniu 9 lipca 2021r zostało uszkodzone oko w p. 324 D-10. Skrzydło prawe (uchylne) jest nieczynne, zostało tylko zabezpieczone taśmą niebieską. Po kilkakrotnym zgłaszaniu problemu administratorowi budynku nic się nie działo.\\r\\nJ. Kalinowska\\r\\n ","start_date":"2022-03-29","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-03-29T08:39:45Z","updated_on":"2022-04-01T07:53:15Z","closed_on":null},{"id":830,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":94,"name":"Zdzislaw Burda"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"szum z wentylacji","description":"dzień dobry,\\r\\n\\r\\nw biurze D7-315 i sąsiednich słychać modulujący odgłos przypominający odgłos zepsutego łożyska.\\r\\njest on przenoszony przez kanał wentylacyjny.\\r\\nprzeszkadza i nie pozwala się skupić.\\r\\n\\r\\nzb","start_date":"2022-03-25","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"72"}],"created_on":"2022-03-25T10:53:29Z","updated_on":"2022-03-25T10:55:38Z","closed_on":null},{"id":819,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":94,"name":"Zdzislaw Burda"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"taras + schody","description":"wydaje mi się, że taras i schody wejściowe do D7 od strony Reymonta  nie są sprzątane.\\r\\nzalega na nich jeszcze żwirek, który został rozrzucony w trakcie zimy.\\r\\npzdr\\r\\nzb","start_date":"2022-03-24","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"72"}],"created_on":"2022-03-24T10:52:21Z","updated_on":"2022-03-28T11:10:36Z","closed_on":null},{"id":780,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":68,"name":"Magdalena Boruchowska"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"uszkodzone kasetony sufitowe ","description":"uszkodzenia kasetonów sufitowych na 2 piętrze paw. D-7:\\r\\npok. 209, 211, \\r\\nkorytarz obok pok. 223\\r\\n","start_date":"2022-03-14","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"72"}],"created_on":"2022-03-14T09:06:21Z","updated_on":"2022-03-14T09:21:59Z","closed_on":null},{"id":767,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":315,"name":"Pawel Jurgielewicz"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Niedziałający telefon D11/120","description":"Telefon całkowicie się wyłącza chwilę po wyciągnięciu ze stacji dokującej","start_date":"2022-03-08","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"73"}],"created_on":"2022-03-08T14:05:15Z","updated_on":"2022-03-31T11:29:31Z","closed_on":null},{"id":756,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":19,"name":"Krzysztof Malarz"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Klucze a pinezki w D-10","description":"ktos (najprawdopodobniej firma obslugujaca utrzymanie sal w czystosci) notorycznie ZAMYKA na klucz pomieszczenia do ktorych dostep jest za pomoca pinezek.","start_date":"2022-03-04","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-03-04T16:27:36Z","updated_on":"2022-03-10T07:43:19Z","closed_on":null},{"id":755,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":19,"name":"Krzysztof Malarz"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Klucze a pinezki w D-7","description":"ktos (najprawdopodobniej firma obslugujaca utrzymanie sal w czystosci) notorycznie ZAMYKA na klucz pomieszczenia do ktorych dostep jest za pomoca pinezek. Bieganie z trzeciego pietra na parter po klucz ma swoje uroki, ale ja w przeciwienstwie do Dziekana Szafrana nie ubiegam sie o medale w maratonach...\\r\\n","start_date":"2022-03-04","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"72"}],"created_on":"2022-03-04T16:26:46Z","updated_on":"2022-03-10T07:42:08Z","closed_on":null},{"id":736,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":1,"name":"Nowe"},"priority":{"id":2,"name":"Normal"},"author":{"id":302,"name":"Tomasz Bold"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Nie działające wejście HDMI w Sali D - czarnej na słupku","description":"Dzień dobry,\\r\\n Sprawdziłem dzisaj czy działa rzutnik w sali D (czarnej) z moim laptopem. \\r\\nOkazuje się że działa ale tylko przy podłączeniu do wejśia na ścianie. \\r\\nWejście na słupu nie działa (a one jest wygodniejsze podczas wykładu). \\r\\nProszę o interwencję. \\r\\nTo nie jest pilne bo jest inne działające rozwiązanie.\\r\\n","start_date":"2022-02-25","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-02-25T15:41:39Z","updated_on":"2022-02-28T09:47:19Z","closed_on":null},{"id":723,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":16,"name":"Bartosz Mindur"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Pęknięte nowe okno w D11-127","description":"Dzień dobry,\\r\\n\\r\\nwymienione okno w pokoju D11-127 jest pęknięte - zdjęcie w załączeniu.\\r\\nBardzo proszę o wymianę.\\r\\n\\r\\nBartosz Mindur","start_date":"2022-02-22","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"73"}],"created_on":"2022-02-22T15:30:44Z","updated_on":"2022-04-19T07:46:43Z","closed_on":null},{"id":711,"project":{"id":38,"name":"Dział obsługi technicznej"},"tracker":{"id":6,"name":"Zlecenie"},"status":{"id":2,"name":"W trakcie realizacji"},"priority":{"id":2,"name":"Normal"},"author":{"id":100,"name":"Jakub Haberko"},"assigned_to":{"id":156,"name":"Beata Ryczek"},"subject":"Nieszczelne okno w p. 312 D-10.","description":"Szanowni Państwo,\\r\\nZgłaszam nieszczelność okna w p. 312 D-10. Podczas dzisiejszej ulewy przez szparę między oknem a parapetem (zdjęcie w zał.) na podłogę nalało się sporo wody. Z góry dziękuję za rozwiązanie problemu.\\r\\nPozdrawiam\\r\\nJakub Haberko","start_date":"2022-02-17","due_date":null,"done_ratio":0,"is_private":false,"estimated_hours":null,"custom_fields":[{"id":17,"name":"Budynek","value":"71"}],"created_on":"2022-02-17T08:55:28Z","updated_on":"2022-03-24T12:56:30Z","closed_on":null}]`,
      }}
    >
      {loadType === LoadType.Input && <LoadDataInputForm />}
      {loadType === LoadType.File && <LoadDataFileForm />}
    </Form>
  );
};

export default LoadDataForms;
