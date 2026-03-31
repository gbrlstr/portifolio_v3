/* eslint-disable @next/next/no-img-element */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { MagicCard } from "@/components/ui/magic-card";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const projects = [
  { title: "FlowPilot", description: "Uma plataforma que organiza tarefas, acompanha equipes e entrega resultados", url: "https://www.flowpilotapp.com.br", icon: 'icon.svg' },
  { title: "AutoPlacas", description: "Descubra tudo sobre qualquer veículo: histórico completo, leilões e muito mais.", url: "https://autoplaca.com.br", icon: 'autoplaca.svg' },
  { title: "D2Rep", description: "Uma plataforma transparente para avaliação de jogadores de Dota2.", url: "https://www.d2rep.com", icon: 'd2rep.png' },
  { title: "D2 Dojo", description: "Uma plataforma que analisa partidas de dota2 e gera relatórios detalhados", url: "https://d2dojo.com", icon: 'd2dojo.svg' },
  { title: "Kick Token Generator", description: "Uma plataforma para gerar tokens de Kick.tv", url: "https://kick-token-generator.vercel.app", icon: 'kicktoken.svg' },
  { title: "TunetrackerPRO", description: "Uma plataforma de widgets interativos youtube, spotify, twitch para streamer de lives", url: "https://www.tunetrackerpro.com", icon: 'tunetracker.svg' },
  { title: "PudgeRunner", description: "Um jogo 2D de plataforma feito com HTML, CSS e JavaScript, com efeitos dos herois do dota2", url: "https://pudge-runner.vercel.app", icon: 'pudgerunner.png' },
  { title: "Brick Breaker", description: "Um jogo 2D de plataforma feito com Phaser 3, com animações e efeitos de partículas", url: "https://brick-breaker-game-delta.vercel.app", icon: 'brickbreaker.png' },
];

const socialLinks = [
  { title: "GitHub", url: "https://github.com/gbrlstr", icon: <FaGithub className="w-5 h-5" /> },
  { title: "LinkedIn", url: "https://linkedin.com/in/gabriel-carlos", icon: <FaLinkedin className="w-5 h-5" /> },
  { title: "Twitter", url: "https://twitter.com/gbrl_str", icon: <FaTwitter className="w-5 h-5" /> },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-primary/30 flex justify-center">
      {/* Modern Flickering Grid Background from Magic UI */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.3}
        flickerChance={0.2}
      />

      <div className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-3 lg:sticky lg:top-16">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            <Avatar className="w-52 h-52 border-[3px] shadow-2xl border-border/80 ring-4 ring-primary/10">
              <AvatarImage src="./eu.jpg" alt="Avatar" />
              <AvatarFallback>GC</AvatarFallback>
            </Avatar>

            <div className="flex flex-col text-center items-center justify-center lg:text-left space-y-2">
              <TypingAnimation
                words={["Gabriel Ferreira", "Desenvolvedor", "Full-Stack"]}
                blinkCursor={true}
                pauseDelay={2000}
                loop
                className="text-4xl font-extrabold tracking-tight text-foreground"
                duration={100}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <p className="text-muted-foreground font-medium text-sm sm:text-base inline-block bg-secondary/50 px-4 py-1.5 rounded-full">
                  Desenvolvo produtos e jogos para web
                </p>
              </motion.div>
            </div>
          </motion.div>
          {/* Links sociais */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 w-full justify-center lg:justify-center"
          >
            {socialLinks.map((link, idx) => (
              <Link key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                <MagicCard
                  className="p-3.5 flex items-center justify-center transition-all duration-300 border border-border/40 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg cursor-pointer backdrop-blur-sm group rounded-xl"
                  gradientColor={"rgba(255,255,255,0.03)"}
                >
                  <div className="text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center">
                    {link.icon}
                  </div>
                </MagicCard>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Right Column (Projects Section) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projects.map((project, idx) => (
                <Link key={idx} href={project.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <MagicCard
                    mode="orb"
                    glowFrom="#ee4f27"
                    glowTo="#6b21ef"
                    className="rounded-2xl p-5 md:p-5 h-full transition-all duration-300 border border-border/40 group-hover:border-primary/40 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/5 cursor-pointer backdrop-blur-md"
                  >
                    <div className="flex items-center gap-5 sm:gap-6 text-foreground">
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-zinc-800/50 rounded-2xl overflow-hidden border border-border/50 shadow-inner flex items-center justify-center">
                        {/* Placeholder de imagem com o nome do projeto */}
                        <img

                          src={project.icon ? `/apps/${project.icon}` : `https://api.dicebear.com/7.x/identicon/svg?seed=${project.title}`}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pr-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
