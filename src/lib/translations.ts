export type Language = 'en' | 'sq' | 'it';

export const translations = {
  en: {
    header: {
      title: 'GREY SKIP CO',
      subtitle: 'Professional Construction Waste Solutions',
      phone: '+355688077788',
      email: 'greyskipco@hotmail.com',
      discount: '15% OFF First-Time Customers - Limited Time!',
      services: 'Services',
      materials: 'Materials',
      whyUs: 'Why Us',
      getQuote: 'Get Quote',
      callNow: 'Call Now'
    },
    hero: {
      badge: 'Same-Day Service Available',
      title: 'Professional Construction Debris Hauling',
      description: 'Fast, reliable, and affordable waste removal for contractors and builders. We handle everything from demolition debris to concrete disposal.',
      cta: 'Get Free Quote',
      features: {
        licensed: 'Licensed & Insured',
        availability: '24/7 Availability',
        eco: 'Eco-Friendly Disposal'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive debris hauling solutions for contractors, builders, and construction professionals',
      demolition: {
        title: 'Demolition Debris Removal',
        description: 'Complete removal of demolition waste including drywall, wood, metal, and mixed materials from your job site.',
        features: ['Same-day pickup', 'Any volume', 'All materials']
      },
      concrete: {
        title: 'Concrete & Asphalt Hauling',
        description: 'Specialized equipment for heavy concrete, asphalt, brick, and stone removal. We handle the toughest materials.',
        features: ['Heavy equipment', 'Crushed & recycled', 'Commercial grade']
      },
      lumber: {
        title: 'Lumber & Wood Waste',
        description: 'Efficient removal of construction lumber, pallets, treated wood, and organic waste materials.',
        features: ['Eco-friendly disposal', 'Recycling options', 'Clean job sites']
      },
      metal: {
        title: 'Scrap Metal Collection',
        description: 'We collect and recycle all ferrous and non-ferrous metals, copper, aluminum, and steel materials.',
        features: ['Get paid for scrap', 'Certified recycling', 'Environmentally safe']
      },
      dumpster: {
        title: 'Dumpster Rental Service',
        description: 'Multiple dumpster sizes available for long-term projects. Flexible rental periods to fit your schedule.',
        features: ['10-40 yard sizes', 'Weekly pickups', 'Flat rate pricing']
      },
      cleanup: {
        title: 'Full Job Site Cleanup',
        description: 'Complete post-construction cleaning service. We leave your site spotless and ready for the next phase.',
        features: ['Final cleanup', 'Detailed service', 'Fast turnaround']
      }
    },
    materials: {
      title: 'Materials We Accept',
      subtitle: 'We handle virtually all types of construction debris and materials. If you don\'t see it listed, just ask!',
      general: {
        category: 'General Construction Debris',
        items: ['Drywall & Sheetrock', 'Wood & Lumber', 'Carpet & Flooring', 'Roofing Materials', 'Insulation', 'Packaging Materials']
      },
      heavy: {
        category: 'Heavy Materials',
        items: ['Concrete & Cement', 'Asphalt', 'Brick & Masonry', 'Stone & Rock', 'Tile & Porcelain', 'Dirt & Soil']
      },
      metal: {
        category: 'Metal & Recyclables',
        items: ['Steel & Iron', 'Copper Wiring', 'Aluminum', 'Brass & Bronze', 'Stainless Steel', 'Mixed Metals']
      },
      organic: {
        category: 'Organic & Wood Waste',
        items: ['Untreated Lumber', 'Treated Wood', 'Pallets & Crates', 'Tree Debris', 'Stumps', 'Yard Waste']
      },
      cta: 'Call for Special Materials',
      notSure: 'Not Sure If We Can Haul It?',
      notSureDesc: 'Contact us for a free consultation. We handle specialty materials and can accommodate unique project requirements.'
    },
    whyUs: {
      title: 'Why Choose ProHaul Debris?',
      subtitle: 'We\'re not just another hauling company. We\'re your construction partner, committed to keeping your projects on schedule and within budget.',
      speed: {
        title: 'Fast & Reliable Service',
        description: 'Same-day and next-day service available. We understand construction timelines and never slow down your project.',
        stat: '2-Hour Response Time'
      },
      pricing: {
        title: 'Transparent Pricing',
        description: 'No hidden fees or surprise charges. Get an accurate quote upfront and lock in your price. Volume discounts available.',
        stat: 'Up to 20% Off for Bulk'
      },
      insurance: {
        title: 'Fully Licensed & Insured',
        description: 'Liability insurance coverage. Licensed by state and local authorities. Your project is protected.',
        stat: 'Coverage'
      },
      team: {
        title: 'Experienced Team',
        description: '15+ years serving contractors and builders. Our crew is trained, professional, and knows construction sites.',
        stat: '15+ Years Experience'
      },
      eco: {
        title: 'Eco-Friendly Disposal',
        description: 'We recycle up to 70% of collected materials. Partner with certified recycling facilities. Responsible waste management.',
        stat: '70% Recycling Rate'
      },
      trust: {
        title: 'Trusted by Professionals',
        description: 'Rated 4.9/5 stars by contractors. Preferred vendor for major construction companies. Excellence is our standard.',
        stat: '4.9/5 Rating'
      },
      stats: {
        projects: 'Projects Completed',
        availability: 'Availability',
        satisfaction: 'Satisfaction Rate',
        trucks: 'Trucks in Fleet'
      }
    },
    gallery: {
      title: 'Our Work in Action',
      subtitle: 'See our professional debris hauling services at work on construction sites across the region',
      cta: 'Start Your Project Today',
      site1: { title: 'Construction Site Cleanup', desc: 'Full debris removal service' },
      site2: { title: 'Heavy Equipment', desc: 'Specialized hauling trucks' },
      site3: { title: 'Demolition Projects', desc: 'Large scale debris removal' },
      site4: { title: 'Commercial Projects', desc: 'Professional hauling service' },
      site5: { title: 'Our Fleet', desc: '50+ trucks ready to serve' },
      site6: { title: 'Residential Services', desc: 'Home renovation cleanup' },
      testimonial: 'Join hundreds of satisfied contractors who trust ProHaul Debris'
    },
    quote: {
      title: 'Get Your Free Quote',
      subtitle: 'Fill out the form below and receive a detailed quote within 2 hours. No commitment required.',
      discount: '15% OFF for First-Time Customers - Limited Time!',
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        date: 'Preferred Service Date',
        address: 'Service Location Address',
        projectType: 'Project Type',
        debrisType: 'Primary Debris Type',
        volume: 'Estimated Volume',
        info: 'Additional Information',
        submit: 'Get My Free Quote Now',
        privacy: 'Your information is secure and will never be shared',
        orCall: 'Prefer to call? Speak with a debris removal specialist now:'
      },
      projectTypes: {
        residential: 'Residential',
        commercial: 'Commercial',
        industrial: 'Industrial',
        demolition: 'Demolition',
        renovation: 'Renovation'
      },
      debrisTypes: {
        concrete: 'Concrete/Asphalt',
        wood: 'Wood/Lumber',
        drywall: 'Drywall/Sheetrock',
        metal: 'Metal/Scrap',
        roofing: 'Roofing Materials',
        mixed: 'Mixed Debris'
      },
      volumes: {
        small: 'Small (1-2 truck loads)',
        medium: 'Medium (3-5 truck loads)',
        large: 'Large (6-10 truck loads)',
        xlarge: 'Extra Large (10+ loads)'
      },
      success: {
        title: 'Quote Request Submitted!',
        message: 'We\'ll contact you within 2 hours with your personalized quote.'
      },
      error: {
        title: 'Submission Failed',
        message: 'Failed to submit quote request. Please try again or call us directly.'
      }
    },
    footer: {
      description: 'Professional construction debris hauling and waste removal services. Licensed, insured, and trusted by contractors.',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      hours: 'Business Hours',
      hourText: '24/7 Emergency Service',
      hourDesc: 'Available for urgent projects',
      copyright: '© 2025 GREY SKIP CO Debris Services. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      licensing: 'Licensing'
    }
  },
  sq: {
    header: {
      title: 'GREY SKIP CO',
      subtitle: 'Zgjidhjet Profesionale për Përpunimin e Mbetjeve të Ndërtimit',
      phone: '+355688077788',
      email: 'greyskipco@hotmail.com',
      discount: '15% ZBRITJE për Klientët e Rinj - Koha e Limituar!',
      services: 'Shërbimet',
      materials: 'Materialet',
      whyUs: 'Pse Ne',
      getQuote: 'Merr Ofertën',
      callNow: 'Telefono Tani'
    },
    hero: {
      badge: 'Shërbimi Ekspres në Dispozicion',
      title: 'Transportimi Profesional i Mbetjeve të Ndërtimit',
      description: 'Heqja e mbeturinave e shpejtë, e besueshme dhe e përballueshme për kontraktorët dhe ndërtuesit. Ne trajtojmë gjithçka nga mbetjet e shkatërrimit deri në heqjen e betonit.',
      cta: 'Merrni Ofertën Falas',
      features: {
        licensed: 'E Licensuar & Siguri',
        availability: 'Disponueshmëri 24/7',
        eco: 'Pastrim Eco-Frindly'
      }
    },
    services: {
      title: 'Shërbimet Tona',
      subtitle: 'Zgjidhje të plotë transportimi të mbetjeve për kontraktorë, ndërtues dhe profesionistë të ndërtimit',
      demolition: {
        title: 'Heqja e Mbetjeve',
        description: 'Heqja e plotë e mbetjeve të shkatërrimit duke përfshirë inerte, dru, metal dhe materialet e përziera nga vendi juaj i punës.',
        features: ['Marrja në të njëjtën ditë', 'Çdo vëllim', 'Të gjitha materialet']
      },
      concrete: {
        title: 'Transportimi i Betonit & Asfaltit',
        description: 'Pajisje të specializuara për heqjen e rëndë të betonit, asfaltit, tullave dhe gurëve. Ne trajtojmë materialet më të forta.',
        features: ['Pajisje të rëndë', 'Tretur & riçikluar']
      },
      lumber: {
        title: 'Mbetjet e Drunjtë',
        description: 'Heqja efikase e lëndës drusore të ndërtimit, palet, drurit të trajtuar dhe materialeve të mbetjeve organike.',
        features: ['Heqja miqësore me mjedisin', 'Opsionet e riçiklimit', 'Vende ndërtimi të pastra']
      },
      metal: {
        title: 'Mbledhja e Metalit Të Vjetër',
        description: 'Ne mbledhim dhe riçiklojmë të gjithë metalet ferruese dhe jo-ferruose, bakrin, aluminin dhe materialet çelikut.',
        features: ['Paguani për mbeturinat', 'Riçiklimi i sertifikuar', 'Në mënyrë të sigurt për mjedisin']
      },
      dumpster: {
        title: 'Shërbim Kontejneri me Qira',
        description: 'Kontejnerë me madhësi të ndryshme në dispozicion për projekte afatgjata. Periudha qiraje fleksibile për përshtatjen e orarit tuaj.',
        features: ['Kohezgjatje 10-40 javësh', 'Marrjet javore', 'Çmim fleksibel']
      },
      cleanup: {
        title: 'Pastrimi i Plotë i Vend Punës',
        description: 'Shërbim i plotë pastrimi pas ndërtimit. Ne e lëmë vendin tuaj të ndritshëm dhe gati për fazën tjetër.',
        features: ['Pastrimi përfundimtar', 'Shërbim detajuar', 'Kthim i shpejtë']
      }
    },
    materials: {
      title: 'Materialet që Pranojmë',
      subtitle: 'Ne trajtojmë praktikisht të gjitha llojet e mbeturinave të ndërtimit dhe materialeve. Nëse nuk e shihni të listuar, thjesht pyetni!',
      general: {
        category: 'Mbetjet Përgjithshme të Ndërtimit',
        items: ['Inerete', 'Dru', 'Tapiceri & Dysheme', 'Materialet e Çatisë', 'Izolim', 'Materialet e Paketimit']
      },
      heavy: {
        category: 'Materialet e Rëndë',
        items: ['Beton & Çimento', 'Asfalt', 'Tulla & Muraturë', 'Gur & Shkëmb', 'Pllakë & Porcelani', 'Dhe & Tokë']
      },
      metal: {
        category: 'Metali & Materialet e Riçiklueshme',
        items: ['Çelik & Hekur', 'Drat e Bakrit', 'Aluminim', 'Bronz & Bronz', 'Çelik Inox', 'Metale të Përziera']
      },
      organic: {
        category: 'Mbetjet Organike & Drunit',
        items: ['Dru i Patrajtuar', 'Dru i Trajtuar', 'Palet & Kutia', 'Mbetjet e Pemëve', 'Cungat', 'Mbeturinat e Oborrit']
      },
      cta: 'Telefononi për Materialet Speciale',
      notSure: 'Nuk Jeni Të Sigurt Nëse Mund ta Transportojmë?',
      notSureDesc: 'Na kontaktoni për një konsultim falas. Ne trajtojmë materialet specjale dhe mund të përshtatemi me kërkesat unike të projekteve.'
    },
    whyUs: {
      title: 'Pse të Zgjidhni GREY SKIP CO?',
      subtitle: 'Ne nuk jemi thjesht një kompani tjetër transportimi. Ne jemi partneri juaj i ndërtimit, i përkushtuar në mbajtjen e projekteve tuaja sipas orarit dhe buxhetit.',
      speed: {
        title: 'Shërbim i Shpejtë & i Besueshëm',
        description: 'Shërbim në të njëjtën ditë dhe ditën tjetër në dispozicion. Ne kuptojmë afatet e ndërtimit dhe asnjëherë nuk ngadalësojmë projektin tuaj.',
        stat: 'Koha e Përgjigjes 2-Orë'
      },
      pricing: {
        title: 'Çmime Transparente',
        description: 'Pa tarifa të fshehura ose kërcime. Merrni një ofertë të saktë paraprakisht dhe mbyllni çmimin tuaj. Zbritjet e vëllimit janë në dispozicion.',
        stat: 'Deri në 20% Zbritje për volume te medha'
      },
      insurance: {
        title: 'E licensuar & E sigurte',
        description: 'Mbulim siguracioni përgjegjësie. E licensuar nga autoritetet shtetërore dhe vendore. Projekti juaj është i mbrojtur.',
        stat: 'Mbulim pergjegjsie'
      },
      team: {
        title: 'Ekip me Përvojë',
        description: '15+ vjet duke shërbyer kontraktorë dhe ndërtues. Ekipi ynë është i trajnuar, profesional dhe njihet në vendet e ndërtimit.',
        stat: '15+ Vjet Përvojë'
      },
      eco: {
        title: 'Heqja Miqësore me Mjedisin',
        description: 'Ne riçiklojmë deri në 70% të materialeve të mbledhura. Partneriteti me përfshirje të sertifikuara riçiklimi. Menaxhim i përgjegjshëm i mbetjeve.',
        stat: 'Norma e Riçiklimit 70%'
      },
      trust: {
        title: 'Marrë në Besim nga Profesionistët',
        description: 'Vlerësim 4.9/5 yje nga kontraktorë. Shitësi i parapëlyer për kompanitë e mëdha të ndërtimit. Përsosmëria është standardi ynë.',
        stat: 'Vlerësim 4.9/5'
      },
      stats: {
        projects: 'Projektet e Përfunduara',
        availability: 'Disponueshmëria',
        satisfaction: 'Norma e Kënaqësisë',
        trucks: 'Kamionet në Flotë'
      }
    },
    gallery: {
      title: 'Puna Jonë në Veprim',
      subtitle: 'Shihni shërbimin tonë profesional të transportimit të mbetjeve në vendet e ndërtimit në rajon',
      cta: 'Filloni Projektin Tuaj Sot',
      site1: { title: 'Pastrimi i Vend Punës', desc: 'Shërbimi i plotë i heqjes së mbetjeve' },
      site2: { title: 'Pajisje të Rënda', desc: 'Kamione transportimi të specializuara' },
      site3: { title: 'Projektet e Shkatërrimit', desc: 'Heqja në shkallë të madhe e mbetjeve' },
      site4: { title: 'Projektet Tregtare', desc: 'Shërbimi profesional i transportimit' },
      site5: { title: 'Flota Jonë', desc: '50+ kamione në shërbimin tuaj' },
      site6: { title: 'Shërbimi Rezidencial', desc: 'Pastrimi i përditshjes pas rinovimit' },
      testimonial: 'Bashkohuni me qindra kontraktorë të kënaqur që besojnë në ProHaul Debris'
    },
    quote: {
      title: 'Merri Ofertën Tuaj Falas',
      subtitle: 'Plotësoni formularin më poshtë dhe merrni një ofertë të detajuar brenda 2 orësh. Nuk kërkohet asnje zotim.',
      discount: '15% ZBRITJE për Klientët e Parë Herë - Koha e Limituar!',
      fields: {
        name: 'Emri i Plotë',
        email: 'Adresa e Email-it',
        phone: 'Numri i Telefonit',
        date: 'Data e Shërbimit të Preferuar',
        address: 'Adresa e Vend Punës',
        projectType: 'Lloji i Projektit',
        debrisType: 'Lloji Parësor i Mbeturinave',
        volume: 'Vëllimi i Vlerësuar',
        info: 'Informacioni Shtesë',
        submit: 'Merr Ofertën Falas Tani',
        privacy: 'Informacioni juaj është i sigurt dhe nuk do të ndahet kurrë',
        orCall: 'Preferoni të telefononi? Flisni me një specialist të heqjes së mbeturinave tani:'
      },
      projectTypes: {
        residential: 'Rezidencial',
        commercial: 'Komercial',
        industrial: 'Industrial',
        demolition: 'Shkatërrimi',
        renovation: 'Rinovimi'
      },
      debrisTypes: {
        concrete: 'Beton/Asfalt',
        wood: 'Dru/Lëndë Drusore',
        drywall: 'Drywall/Sheetrock',
        metal: 'Metal/Mbeturina Metalike',
        roofing: 'Materialet e Çatisë',
        mixed: 'Mbetjet e Përziera'
      },
      volumes: {
        small: 'I vogël (1-2 ngarkesa kamioni)',
        medium: 'Mesatar (3-5 ngarkesa kamioni)',
        large: 'I madh (6-10 ngarkesa kamioni)',
        xlarge: 'Extra i madh (10+ ngarkesa)'
      },
      success: {
        title: 'Kërkesa për Ofertë Dorëzuar!',
        message: 'Ne do t\'ju kontaktojmë brenda 2 orësh me ofertën tuaj të personalizuar.'
      },
      error: {
        title: 'Dorëzimi Dështoi',
        message: 'Dështoi dorëzimi i kërkesës për ofertë. Ju lutemi provoni përsëri ose na telefononi drejtpërdrejt.'
      }
    },
    footer: {
      description: 'Shërbimi profesional i transportimit të mbeturinave të ndërtimit dhe heqja e mbeturinave. Me lejëzim, siguruar dhe marrë në besim nga kontraktorë.',
      quickLinks: 'Lidhjet e Shpejtë',
      contact: 'Informacioni i Kontaktit',
      hours: 'Oraret e Punës',
      hourText: 'Shërbimi i Emergjencës 24/7',
      hourDesc: 'në dispozicion për projekte urgjente',
      copyright: '© 2025 GREY SKIP CO Services. Të gjitha të drejtat e rezervuara.',
      privacy: 'Politika e Privatësisë',
      terms: 'Termat e Shërbimit',
      licensing: 'Lincensuar'
    }
  },
  it: {
    header: {
      title: 'GREY SKIP CO',
      subtitle: 'Soluzioni Professionali per lo Smaltimento dei Rifiuti da Costruzione',
      phone: '+355688077788',
      email: 'greyskipco@hotmail.com',
      discount: '15% DI SCONTO per i Nuovi Clienti - Tempo Limitato!',
      services: 'Servizi',
      materials: 'Materiali',
      whyUs: 'Perché Noi',
      getQuote: 'Richiedi Preventivo',
      callNow: 'Chiama Ora'
    },
    hero: {
      badge: 'Servizio lo Stesso Giorno Disponibile',
      title: 'Trasporto Professionale di Rifiuti da Demolizione',
      description: 'Rimozione di rifiuti veloce, affidabile ed economica per appaltatori e costruttori. Gestiamo tutto dalle macerie di demolizione allo smaltimento del calcestruzzo.',
      cta: 'Ottieni Preventivo Gratuito',
      features: {
        licensed: 'Autorizzati & Assicurati',
        availability: 'Disponibilità 24/7',
        eco: 'Smaltimento Ecologico'
      }
    },
    services: {
      title: 'I Nostri Servizi',
      subtitle: 'Soluzioni complete di trasporto di rifiuti per appaltatori, costruttori e professionisti dell\'edilizia',
      demolition: {
        title: 'Rimozione Macerie di Demolizione',
        description: 'Rimozione completa di rifiuti di demolizione inclusi cartongesso, legno, metallo e materiali misti dal vostro cantiere.',
        features: ['Ritiro lo stesso giorno', 'Qualsiasi volume', 'Tutti i materiali']
      },
      concrete: {
        title: 'Trasporto Calcestruzzo e Asfalto',
        description: 'Attrezzature specializzate per la rimozione pesante di calcestruzzo, asfalto, mattoni e pietra. Gestiamo i materiali più difficili.',
        features: ['Attrezzature pesanti', 'Frantumato e riciclato', 'Grado commerciale']
      },
      lumber: {
        title: 'Rifiuti di Legname e Legno',
        description: 'Rimozione efficiente di legname da costruzione, pallet, legno trattato e materiali di scarto organico.',
        features: ['Smaltimento ecologico', 'Opzioni di riciclaggio', 'Cantieri puliti']
      },
      metal: {
        title: 'Raccolta Rottami Metallici',
        description: 'Raccogliamo e ricicliamo tutti i metalli ferrosi e non ferrosi, rame, alluminio e materiali in acciaio.',
        features: ['Pagamento per i rottami', 'Riciclaggio certificato', 'Ambientalmente sicuro']
      },
      dumpster: {
        title: 'Servizio di Noleggio Cassonetti',
        description: 'Cassonetti di varie dimensioni disponibili per progetti a lungo termine. Periodi di noleggio flessibili per adattarsi ai vostri tempi.',
        features: ['Dimensioni 10-40 iarde', 'Ritiri settimanali', 'Prezzo fisso']
      },
      cleanup: {
        title: 'Pulizia Completa del Cantiere',
        description: 'Servizio di pulizia post-costruzione completo. Lasciamo il vostro sito perfettamente pulito e pronto per la fase successiva.',
        features: ['Pulizia finale', 'Servizio dettagliato', 'Rapido ritorno']
      }
    },
    materials: {
      title: 'Materiali che Accettiamo',
      subtitle: 'Gestiamo praticamente tutti i tipi di rifiuti di costruzione e materiali. Se non lo vedete elencato, chiedete pure!',
      general: {
        category: 'Rifiuti Generali da Costruzione',
        items: ['Cartongesso e Lastre', 'Legno e Legname', 'Moquette e Pavimenti', 'Materiali di Copertura', 'Isolamento', 'Materiali di Imballaggio']
      },
      heavy: {
        category: 'Materiali Pesanti',
        items: ['Calcestruzzo e Cemento', 'Asfalto', 'Mattoni e Muratura', 'Pietra e Roccia', 'Piastrelle e Porcellana', 'Terra e Terreno']
      },
      metal: {
        category: 'Metalli e Materiali Riciclabili',
        items: ['Acciaio e Ferro', 'Cavi di Rame', 'Alluminio', 'Ottone e Bronzo', 'Acciaio Inossidabile', 'Metalli Misti']
      },
      organic: {
        category: 'Rifiuti Organici e di Legno',
        items: ['Legname Non Trattato', 'Legno Trattato', 'Pallet e Casse', 'Rifiuti di Alberi', 'Ceppi', 'Rifiuti di Giardino']
      },
      cta: 'Chiama per Materiali Speciali',
      notSure: 'Non Siete Sicuri Se Possiamo Trasportarlo?',
      notSureDesc: 'Contattateci per una consulenza gratuita. Gestiamo materiali speciali e possiamo adattarci a esigenze di progetto uniche.'
    },
    whyUs: {
      title: 'Perché Scegliere GREY SKIP CO?',
      subtitle: 'Non siamo solo un\'altra azienda di trasporto. Siamo il vostro partner di costruzione, impegnati a mantenere i vostri progetti in programma e nel budget.',
      speed: {
        title: 'Servizio Veloce e Affidabile',
        description: 'Servizio lo stesso giorno e il giorno successivo disponibile. Comprendiamo i tempi di costruzione e non rallentiamo mai il vostro progetto.',
        stat: 'Tempo di Risposta 2 Ore'
      },
      pricing: {
        title: 'Prezzi Trasparenti',
        description: 'Nessuna commissione nascosta o sorprese. Ottenete un preventivo accurato in anticipo e bloccate il vostro prezzo. Sconti per volumi disponibili.',
        stat: 'Fino al 20% di Sconto per Volumi Grandi'
      },
      insurance: {
        title: 'Completamente Autorizzati e Assicurati',
        description: 'Copertura assicurativa di responsabilità civile. Autorizzati dalle autorità statali e locali. Il vostro progetto è protetto.',
        stat: 'Copertura Assicurativa'
      },
      team: {
        title: 'Team Esperto',
        description: 'Oltre 15 anni al servizio di appaltatori e costruttori. Il nostro team è addestrato, professionale e conosce i cantieri.',
        stat: 'Oltre 15 Anni di Esperienza'
      },
      eco: {
        title: 'Smaltimento Ecologico',
        description: 'Ricicliamo fino al 70% dei materiali raccolti. Partenariato con impianti di riciclaggio certificati. Gestione responsabile dei rifiuti.',
        stat: 'Tasso di Riciclaggio 70%'
      },
      trust: {
        title: 'Fidato dai Professionisti',
        description: 'Valutazione 4,9/5 stelle dai subappaltatori. Fornitore preferito dalle grandi aziende di costruzione. L\'eccellenza è il nostro standard.',
        stat: 'Valutazione 4,9/5'
      },
      stats: {
        projects: 'Progetti Completati',
        availability: 'Disponibilità',
        satisfaction: 'Tasso di Soddisfazione',
        trucks: 'Camion in Flotta'
      }
    },
    gallery: {
      title: 'Il Nostro Lavoro in Azione',
      subtitle: 'Guardate i nostri servizi professionali di trasporto di rifiuti in azione nei cantieri della regione',
      cta: 'Inizia il Tuo Progetto Oggi',
      site1: { title: 'Pulizia Cantiere', desc: 'Servizio completo di rimozione rifiuti' },
      site2: { title: 'Attrezzature Pesanti', desc: 'Camion di trasporto specializzati' },
      site3: { title: 'Progetti di Demolizione', desc: 'Rimozione rifiuti su larga scala' },
      site4: { title: 'Progetti Commerciali', desc: 'Servizio di trasporto professionale' },
      site5: { title: 'La Nostra Flotta', desc: '50+ camion pronti a servirvi' },
      site6: { title: 'Servizi Residenziali', desc: 'Pulizia dopo ristrutturazione' },
      testimonial: 'Unitevi a centinaia di appaltatori soddisfatti che si fidano di GREY SKIP CO'
    },
    quote: {
      title: 'Ottieni il Tuo Preventivo Gratuito',
      subtitle: 'Compilate il modulo sottostante e ricevete un preventivo dettagliato entro 2 ore. Nessun impegno richiesto.',
      discount: '15% DI SCONTO per i Nuovi Clienti - Tempo Limitato!',
      fields: {
        name: 'Nome Completo',
        email: 'Indirizzo Email',
        phone: 'Numero di Telefono',
        date: 'Data di Servizio Preferita',
        address: 'Indirizzo Ubicazione Servizio',
        projectType: 'Tipo di Progetto',
        debrisType: 'Tipo Principale di Rifiuti',
        volume: 'Volume Stimato',
        info: 'Informazioni Aggiuntive',
        submit: 'Ottieni il Mio Preventivo Gratuito Ora',
        privacy: 'Le vostre informazioni sono sicure e non verranno mai condivise',
        orCall: 'Preferite telefonare? Parlatene con uno specialista di rimozione rifiuti ora:'
      },
      projectTypes: {
        residential: 'Residenziale',
        commercial: 'Commerciale',
        industrial: 'Industriale',
        demolition: 'Demolizione',
        renovation: 'Ristrutturazione'
      },
      debrisTypes: {
        concrete: 'Calcestruzzo/Asfalto',
        wood: 'Legno/Legname',
        drywall: 'Cartongesso/Lastre',
        metal: 'Metallo/Rottami',
        roofing: 'Materiali di Copertura',
        mixed: 'Rifiuti Misti'
      },
      volumes: {
        small: 'Piccolo (1-2 carichi di camion)',
        medium: 'Medio (3-5 carichi di camion)',
        large: 'Grande (6-10 carichi di camion)',
        xlarge: 'Extra Grande (10+ carichi)'
      },
      success: {
        title: 'Richiesta di Preventivo Inviata!',
        message: 'Vi contatteremo entro 2 ore con il vostro preventivo personalizzato.'
      },
      error: {
        title: 'Invio Fallito',
        message: 'Errore nell\'invio della richiesta di preventivo. Riprovate o chiamateci direttamente.'
      }
    },
    footer: {
      description: 'Servizi professionali di trasporto e smaltimento di rifiuti da costruzione. Autorizzati, assicurati e fidati dai subappaltatori.',
      quickLinks: 'Collegamenti Rapidi',
      contact: 'Informazioni di Contatto',
      hours: 'Orari di Lavoro',
      hourText: 'Servizio di Emergenza 24/7',
      hourDesc: 'Disponibile per progetti urgenti',
      copyright: '© 2025 GREY SKIP CO Services. Tutti i diritti riservati.',
      privacy: 'Politica sulla Privacy',
      terms: 'Condizioni di Servizio',
      licensing: 'Licenze'
    }
  }
};
