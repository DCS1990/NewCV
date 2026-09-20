'use client';

import React from 'react';
import {
  Server,
  Headphones,
  Network,
  Wrench,
  Boxes,
  ShieldCheck,
  FileCheck2,
  Terminal,
  Users,
  DatabaseBackup,
  Truck,
  CheckCircle2,
  Check,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  FileText,
  FolderKanban,
  Code2,
  Sparkles,
  ArrowRight,
  Sun,
  Moon,
  Menu,
  X,
  Copy,
  CheckCheck,
  HardDrive,
  Cpu,
  Layers,
  Award,
  GraduationCap
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = 'w-5 h-5' }: DynamicIconProps) {
  const iconMap: Record<string, React.ReactElement> = {
    Server: <Server className={className} />,
    Headphones: <Headphones className={className} />,
    Network: <Network className={className} />,
    Wrench: <Wrench className={className} />,
    Boxes: <Boxes className={className} />,
    ShieldCheck: <ShieldCheck className={className} />,
    FileCheck2: <FileCheck2 className={className} />,
    Terminal: <Terminal className={className} />,
    Users: <Users className={className} />,
    DatabaseBackup: <DatabaseBackup className={className} />,
    Truck: <Truck className={className} />,
    CheckCircle2: <CheckCircle2 className={className} />,
    Check: <Check className={className} />,
    Download: <Download className={className} />,
    ExternalLink: <ExternalLink className={className} />,
    Github: <Github className={className} />,
    Linkedin: <Linkedin className={className} />,
    Mail: <Mail className={className} />,
    Phone: <Phone className={className} />,
    MessageSquare: <MessageSquare className={className} />,
    MapPin: <MapPin className={className} />,
    FileText: <FileText className={className} />,
    FolderKanban: <FolderKanban className={className} />,
    Code2: <Code2 className={className} />,
    Sparkles: <Sparkles className={className} />,
    ArrowRight: <ArrowRight className={className} />,
    Sun: <Sun className={className} />,
    Moon: <Moon className={className} />,
    Menu: <Menu className={className} />,
    X: <X className={className} />,
    Copy: <Copy className={className} />,
    CheckCheck: <CheckCheck className={className} />,
    HardDrive: <HardDrive className={className} />,
    Cpu: <Cpu className={className} />,
    Layers: <Layers className={className} />,
    Award: <Award className={className} />,
    GraduationCap: <GraduationCap className={className} />,
  };

  return iconMap[name] || <Server className={className} />;
}
