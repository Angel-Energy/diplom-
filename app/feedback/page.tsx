'use client';

import {
  Send,
  Github,
  MessageSquare,
  Bug,
  Lightbulb,
  FileText,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const feedbackTypes = [
  {
    value: 'bug',
    label: 'Ошибка',
    icon: Bug,
    color: 'text-red-500',
  },
  {
    value: 'enhancement',
    label: 'Улучшение',
    icon: MessageSquare,
    color: 'text-green-500',
  },
  {
    value: 'idea',
    label: 'Идея',
    icon: Lightbulb,
    color: 'text-yellow-500',
  },
  {
    value: 'documentation',
    label: 'Документация',
    icon: FileText,
    color: 'text-blue-500',
  },
];

const categories = [
  { value: 'ui', label: 'Интерфейс' },
  { value: 'gameplay', label: 'Игровой процесс' },
  { value: 'story', label: 'Сюжет' },
  { value: 'minigames', label: 'Мини-игры' },
  { value: 'performance', label: 'Производительность' },
  { value: 'other', label: 'Другое' },
];

export default function FeedbackPage() {
  const router = useRouter();
  const [type, setType] = useState('bug');
  const [category, setCategory] = useState('ui');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [justification, setJustification] = useState('');
  const [examples, setExamples] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    if (!title || !description) {
      setError('Заголовок и описание являются обязательными полями.');
      setStatus('error');
      return;
    }

    const issueBody = `
**Тип:** ${type}
**Категория:** ${category}

**Заголовок:** ${title}

**Описание:**
${description}

**Обоснование:**
${justification}

**Примеры:**
${examples}

**Контактная информация:**
${contact}
`;

    // Симуляция создания задачи в GitHub Issues
    console.log('Creating GitHub issue...');
    console.log('Title:', title);
    console.log('Body:', issueBody);
    const labels = [type, category];
    console.log('Labels:', labels);

    // Используем детерминированную логику вместо Math.random() для избежания ошибок гидратации
    const success = title.length > 5 && description.length > 10; // Простая проверка валидности

    await new Promise(resolve => setTimeout(resolve, 1500));

    if (success) {
      setStatus('success');
      setTimeout(() => router.push('/docs'), 3000);
    } else {
      setError(
        'Не удалось создать задачу. Пожалуйста, попробуйте снова или свяжитесь с нами напрямую.'
      );
      setStatus('error');
    }
  };

  const selectedTypeIcon = feedbackTypes.find(t => t.value === type)?.icon || Bug;
  const SelectedIcon = selectedTypeIcon;

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4'>
      <Card className='w-full max-w-3xl bg-slate-800/50 border-slate-700/50 text-slate-200'>
        <CardHeader className='text-center'>
          <div className='mx-auto bg-slate-700/50 rounded-full p-3 w-fit mb-4'>
            <Github className='h-8 w-8 text-cyan-400' />
          </div>
          <CardTitle className='text-3xl font-bold text-cyan-400'>Форма обратной связи</CardTitle>
          <CardDescription className='text-slate-400'>
            Ваш отзыв помогает нам улучшать «Сообщение 404». Эта форма автоматически создаст задачу
            в нашем трекере.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {status === 'success' ? (
            <Alert className='bg-green-500/10 border-green-500/20 text-green-400'>
              <CheckCircle className='h-4 w-4' />
              <AlertTitle>Спасибо за ваш отзыв!</AlertTitle>
              <AlertDescription>
                Ваша задача успешно создана. Мы рассмотрим ее в ближайшее время. Вы будете
                перенаправлены на главную страницу через 3 секунды.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              {status === 'error' && error && (
                <Alert
                  variant='destructive'
                  className='bg-red-500/10 border-red-500/20 text-red-400'
                >
                  <AlertCircle className='h-4 w-4' />
                  <AlertTitle>Ошибка</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <Label className='text-slate-300'>Тип отзыва</Label>
                  <RadioGroup
                    value={type}
                    onValueChange={setType}
                    className='grid grid-cols-2 gap-4 mt-2'
                  >
                    {feedbackTypes.map(({ value, label, icon: Icon, color }) => (
                      <Label
                        key={value}
                        htmlFor={value}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors border-2 ${
                          type === value
                            ? 'bg-cyan-500/20 border-cyan-500'
                            : 'bg-slate-700/30 border-slate-600 hover:border-slate-500'
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${color}`} />
                        <span className='font-medium'>{label}</span>
                        <RadioGroupItem value={value} id={value} className='sr-only' />
                      </Label>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor='category' className='text-slate-300'>
                    Категория
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger
                      id='category'
                      className='w-full mt-2 bg-slate-700/50 border-slate-600 focus:ring-cyan-500'
                    >
                      <SelectValue placeholder='Выберите категорию' />
                    </SelectTrigger>
                    <SelectContent className='bg-slate-800 border-slate-700 text-slate-200'>
                      {categories.map(({ value, label }) => (
                        <SelectItem key={value} value={value} className='focus:bg-slate-700'>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor='title' className='text-slate-300'>
                  Заголовок
                </Label>
                <Input
                  id='title'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder='Кратко опишите проблему или предложение'
                  className='mt-2 bg-slate-700/50 border-slate-600 focus-visible:ring-cyan-500'
                  required
                />
              </div>

              <div>
                <Label htmlFor='description' className='text-slate-300'>
                  Подробное описание
                </Label>
                <Textarea
                  id='description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder='Опишите детали, шаги для воспроизведения (для ошибок) и т.д.'
                  className='mt-2 bg-slate-700/50 border-slate-600 min-h-[120px] focus-visible:ring-cyan-500'
                  required
                />
              </div>

              <div>
                <Label htmlFor='justification' className='text-slate-300'>
                  Обоснование (опционально)
                </Label>
                <Textarea
                  id='justification'
                  value={justification}
                  onChange={e => setJustification(e.target.value)}
                  placeholder='Почему это важно? Какую проблему это решает?'
                  className='mt-2 bg-slate-700/50 border-slate-600 min-h-[80px] focus-visible:ring-cyan-500'
                />
              </div>

              <div>
                <Label htmlFor='examples' className='text-slate-300'>
                  Примеры (опционально)
                </Label>
                <Textarea
                  id='examples'
                  value={examples}
                  onChange={e => setExamples(e.target.value)}
                  placeholder='Приведите примеры, скриншоты, ссылки и т.д.'
                  className='mt-2 bg-slate-700/50 border-slate-600 min-h-[80px] focus-visible:ring-cyan-500'
                />
              </div>

              <div>
                <Label htmlFor='contact' className='text-slate-300'>
                  Контактная информация (опционально)
                </Label>
                <Input
                  id='contact'
                  value={contact}
                  onChange={e => setContact(e.target.value)}
                  placeholder='Ваш email или ник в Telegram/Discord'
                  className='mt-2 bg-slate-700/50 border-slate-600 focus-visible:ring-cyan-500'
                />
              </div>

              <div className='flex justify-end'>
                <Button
                  type='submit'
                  disabled={status === 'submitting'}
                  className='bg-cyan-500/20 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/30 w-full sm:w-auto px-8 py-3'
                >
                  {status === 'submitting' ? (
                    <>
                      <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-slate-300 mr-2' />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className='h-4 w-4 mr-2' />
                      Отправить
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
