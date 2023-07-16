import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'es',
		resources: {
			es: {
				translation: {
					navbar: {
						agendar: 'Agendar una reunión',
						productos: 'Productos',
						sustentabilidad: 'Sustentabilidad',
						sobreProdeman: 'Sobre Prodeman',
						trabaja: 'Trabajá con nosotros',
						educacion: 'Educación',
					},
					header: {
						title: 'MANÍ ARGENTINO CON CALIDAD DE <1>EXPORTACIÓN</1>',
						subtitle:
							'En <1>Prodeman</1> trabajan más de 600 personas, dedicadas a llevar a cabo cada etapa productiva y de comercialización del maní.',
					},
				},
			},
			en: {
				translation: {
					navbar: {
						agendar: 'Schedule a meeting',
						productos: 'Products',
						sustentabilidad: 'Sustainability',
						sobreProdeman: 'About Prodeman',
						trabaja: 'Work with us',
						educacion: 'Education',
					},
					header: {
						title: 'ARGENTINE PEANUTS WITH <1>EXPORT QUALITY</1>',
						subtitle:
							'More than 600 people work at <1>Prodeman</1>, dedicated to carrying out each production and marketing stage of peanuts.',
					},
				},
			},
			pr: {
				translation: {
					navbar: {
						agendar: 'Reunião cronograma',
						productos: 'Produtos',
						sustentabilidad: 'Sustentabilidade',
						sobreProdeman: 'Sobre a Prodeman',
						trabaja: 'Trabalhar com a gente',
						educacion: 'Educação',
					},
					header: {
						title: 'AMENDOIM ARGENTINO COM <1>QUALIDADE DE EXPORTAÇÃO</1>',
						subtitle:
							'Mais de 600 pessoas trabalham na <1>Prodeman</1> dedicadas a realizar cada etapa da produção e comercialização do amendoim.',
					},
				},
			},
			zh: {
				translation: {
					navbar: {
						agendar: '安排会议',
						productos: '產品',
						sustentabilidad: '可持續性',
						sobreProdeman: '關於普羅德曼',
						trabaja: '跟我們工作',
						educacion: '教育',
					},
					header: {
						title: '<1>具有出口</1> 品質的阿根廷花生',
						subtitle:
							'<1>Prodeman</1> 擁有 600 多名員工，致力於花生生產和營銷的各個階段',
					},
				},
			},
		},
	});
