import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  host: { ngSkipHydration: '' },
})
export class App implements OnInit {
  protected readonly title = signal('portfolio-karamoko');

  protected currentLang: string = 'en';

  protected translations: Translations = {
    en: {
      // Hero
      hero_title:
        'Full-Stack Engineer & Tech Lead | 4+ years experience | Microservices Architecture | DevOps | Fintech',
      hero_contact: 'Contact me',
      hero_projects: 'View projects',

      // Navigation
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_experience: 'Experience',
      nav_certifications: 'Certifications',
      nav_projects: 'Projects',
      nav_contact: 'Contact',

      // About
      about_title: 'About Me',
      about_text:
        'Passionate about software engineering and innovation, I combine full-stack technical expertise, Agile leadership, and DevOps practices to deliver scalable, secure, and maintainable products. Currently Tech Lead at SONEC AFRICA, I lead strategic projects for the Ministry of Digital Affairs.',
      about_exp: 'Years of experience',
      about_projects: 'Projects delivered',
      about_certs: 'Certifications',

      // Skills
      skills_title: 'Technical Skills',
      skills_microservices: 'Microservices',
      skills_arch: 'Architecture & Security',
      skills_clean: 'Clean Architecture',

      // Experience
      exp_title: 'Professional Experience',
      exp_lead_title: 'Tech Lead',
      exp_lead_desc:
        'Technical leadership of strategic projects with the Ministry of Digital Affairs. Design of scalable architectures, full lifecycle from analysis to production.',
      exp_fullstack_title: 'Lead Full-Stack Developer',
      exp_fullstack_desc:
        'Critical banking & institutional applications (LABFT, EVAL-FIN). Spring Boot APIs, Angular/React interfaces, international standards.',
      exp_consultant_title: 'Full-Stack Consultant',
      exp_consultant_desc:
        'Swiss banking solutions, deployment on secure environments. EPI-DUI project (medical monitoring).',
      exp_dev_title: 'Full-Stack Developer',
      exp_dev_desc:
        'REST APIs Spring Boot, Angular/Flutter interfaces, Mule ESB & WSO2 integration.',

      // Certifications
      cert_title: 'Certifications & Training',
      cert_pm: 'Project Manager (Udemy)',
      cert_data: 'Data Analyst (Force N)',
      cert_ai: 'AI & Machine Learning (Force N)',
      cert_angular: 'Angular Frontend (Force N)',
      cert_training: 'Training programs',

      // Projects
      projects_title: 'Featured Projects',
      project_view: 'View project',
      project_oskar: 'Donation/exchange/sale platform',
      project_oskar_desc: 'AI moderation, virtual assistant, 2FA, intelligent supervision.',
      project_infas: 'Nursing school exam management',
      project_infas_desc:
        'Registration management, payments and appointment booking. This is the entrance exam for the INFAS nursing school.',
      project_insfs: 'Teacher exam management',
      project_insfs_desc: 'Exam management platform for schools and preschools.',
      project_orange: 'Plastic paver production',
      project_orange_desc:
        'Autonomous system + mobile app. Startup funded by Orange Digital Center.',
      project_epi: 'Medical monitoring for clinics',
      project_epi_desc:
        'Medical monitoring application for Swiss clinics and hospitals (ProActive Solution).',
      project_autisme: 'Autism Companion',
      project_autisme_desc: 'Health tracking mobile app',
      project_autisme_back: 'Specialized agent interface, reminders, secure medical reports.',

      // Contact
      contact_title: 'Contact Me',
      contact_email: 'Email',
      contact_phone: 'Phone',
      contact_portfolio: 'Portfolio',
      contact_send: 'Send me an email',

      // Footer
      footer_title: 'Full-Stack Engineer & Tech Lead',
    },
    fr: {
      // Hero
      hero_title:
        'Ingénieur Full-Stack & Tech Lead | 4+ ans expérience | Architecture Microservices | DevOps | Fintech',
      hero_contact: 'Me contacter',
      hero_projects: 'Voir projets',

      // Navigation
      nav_about: 'À propos',
      nav_skills: 'Compétences',
      nav_experience: 'Expérience',
      nav_certifications: 'Certifications',
      nav_projects: 'Projets',
      nav_contact: 'Contact',

      // About
      about_title: 'À propos de moi',
      about_text:
        "Passionné par l'ingénierie logicielle et l'innovation, je combine expertise technique full-stack, leadership Agile et pratiques DevOps pour livrer des produits scalables, sécurisés et maintenables. Actuellement Tech Lead à SONEC AFRICA, je pilote des projets stratégiques pour le Ministère du Numérique.",
      about_exp: "Années d'expérience",
      about_projects: 'Projets livrés',
      about_certs: 'Certifications',

      // Skills
      skills_title: 'Compétences Techniques',
      skills_microservices: 'Microservices',
      skills_arch: 'Architecture & Sécurité',
      skills_clean: 'Clean Architecture',

      // Experience
      exp_title: 'Expérience Professionnelle',
      exp_lead_title: 'Lead Tech',
      exp_lead_desc:
        "Pilotage technique de projets stratégiques avec le Ministère du Numérique. Conception d'architectures évolutives, cycle de vie complet de l'analyse à la production.",
      exp_fullstack_title: 'Lead Développeur Full-Stack',
      exp_fullstack_desc:
        'Applications bancaires & institutionnelles critiques (LABFT, EVAL-FIN). APIs Spring Boot, interfaces Angular/React, standards internationaux.',
      exp_consultant_title: 'Consultant Full-Stack',
      exp_consultant_desc:
        'Solutions bancaires suisses, déploiement sur environnements sécurisés. Projet EPI-DUI (suivi médical).',
      exp_dev_title: 'Développeur Full-Stack',
      exp_dev_desc:
        'APIs REST Spring Boot, interfaces Angular/Flutter, intégration Mule ESB & WSO2.',

      // Certifications
      cert_title: 'Certifications et Formations',
      cert_pm: 'Project Manager (Udemy)',
      cert_data: 'Data Analyst (Force N)',
      cert_ai: 'IA & Machine Learning (Force N)',
      cert_angular: 'Angular Frontend (Force N)',
      cert_training: 'Formations suivies',

      // Projects
      projects_title: 'Projets Phares',
      project_view: 'Voir le projet',
      project_oskar: 'Plateforme don/échange/vente',
      project_oskar_desc: 'IA de modération, assistant virtuel, 2FA, supervision intelligente.',
      project_infas: 'Gestion concours infirmiers',
      project_infas_desc:
        "Gestion des inscriptions, paiements et prise de RDV. C'est le concours d'entrée à l'école INFAS pour les infirmiers.",
      project_insfs: 'Gestion concours enseignants',
      project_insfs_desc:
        'Plateforme de gestion de concours pour établissement scolaire et préscolaire.',
      project_orange: 'Production pavés plastiques',
      project_orange_desc:
        'Système autonome + app mobile. Startup financée par Orange Digital Center.',
      project_epi: 'Suivi médical cliniques',
      project_epi_desc:
        'Application de suivi médical pour cliniques et hôpitaux suisses (ProActive Solution).',
      project_autisme: 'Autisme Compagnon',
      project_autisme_desc: 'Application mobile de suivi santé',
      project_autisme_back: 'Interface agents spécialisés, rappels, rapports médicaux sécurisés.',

      // Contact
      contact_title: 'Me contacter',
      contact_email: 'Email',
      contact_phone: 'Téléphone',
      contact_portfolio: 'Portfolio',
      contact_send: 'Envoyez-moi un email',

      // Footer
      footer_title: 'Ingénieur Full-Stack & Tech Lead',
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Sauvegarder la langue préférée
      const savedLang = localStorage.getItem('preferredLang');
      if (savedLang === 'en' || savedLang === 'fr') {
        this.currentLang = savedLang;
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.setupSmoothScroll());
      } else {
        this.setupSmoothScroll();
      }
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('preferredLang', this.currentLang);
    }
  }

  private setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href');
        if (targetId && targetId !== '#') {
          const target = document.querySelector(targetId) as HTMLElement;
          if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }
}
