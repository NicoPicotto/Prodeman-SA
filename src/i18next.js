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
				},
			},
		},
	});
