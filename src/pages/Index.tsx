import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [activeTab, setActiveTab] = useState("overview");

  const hostingPlans = [
    {
      name: "Стартовый",
      price: "290",
      features: [
        "1 сайт",
        "5 ГБ SSD",
        "10 ГБ трафика",
        "SSL сертификат",
        "Техподдержка 24/7",
      ],
      popular: false,
    },
    {
      name: "Бизнес",
      price: "690",
      features: [
        "5 сайтов",
        "20 ГБ SSD",
        "100 ГБ трафика",
        "SSL сертификат",
        "Приоритетная поддержка",
        "Ежедневные бэкапы",
      ],
      popular: true,
    },
    {
      name: "Корпоративный",
      price: "1490",
      features: [
        "Безлимит сайтов",
        "100 ГБ SSD",
        "500 ГБ трафика",
        "Выделенный IP",
        "Премиум поддержка",
        "Панель управления Pro",
      ],
      popular: false,
    },
  ];

  const services = [
    {
      icon: "Server",
      title: "Веб-хостинг",
      description:
        "Надежный хостинг для ваших сайтов с гарантией 99.9% аптайма",
    },
    {
      icon: "Database",
      title: "Базы данных",
      description:
        "MySQL, PostgreSQL и другие СУБД с высокой производительностью",
    },
    {
      icon: "Shield",
      title: "SSL сертификаты",
      description: "Бесплатные и премиум SSL сертификаты для защиты данных",
    },
    {
      icon: "Network",
      title: "CDN",
      description: "Глобальная сеть доставки контента для ускорения сайтов",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Server" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">HostPlatform</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-primary font-medium transition-colors"
              >
                Главная
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                Тарифы
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Профессиональный хостинг
              <br />
              для вашего бизнеса
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Надежная платформа с панелью управления, статистикой в реальном
              времени и полным контролем над вашими проектами
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="px-8 py-3">
                Начать работу
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Play" size={16} className="mr-2" />
                Демо панели
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Control Panel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Панель управления
            </h3>
            <p className="text-xl text-gray-600">
              Полный контроль над вашим хостингом
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="performance">
                  Производительность
                </TabsTrigger>
                <TabsTrigger value="security">Безопасность</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Активные сайты
                      </CardTitle>
                      <Icon
                        name="Globe"
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">
                        +2 за месяц
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Трафик
                      </CardTitle>
                      <Icon
                        name="TrendingUp"
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">45.2 ГБ</div>
                      <p className="text-xs text-muted-foreground">
                        73% от лимита
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Дисковое пространство
                      </CardTitle>
                      <Icon
                        name="HardDrive"
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">28.4 ГБ</div>
                      <p className="text-xs text-muted-foreground">
                        56% используется
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Аптайм
                      </CardTitle>
                      <Icon
                        name="Activity"
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">99.97%</div>
                      <p className="text-xs text-muted-foreground">
                        Последние 30 дней
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Использование ресурсов</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>CPU</span>
                          <span>34%</span>
                        </div>
                        <Progress value={34} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>RAM</span>
                          <span>67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Дисковое пространство</span>
                          <span>56%</span>
                        </div>
                        <Progress value={56} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Последние события</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Icon
                            name="CheckCircle"
                            className="h-4 w-4 text-green-500"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              SSL сертификат обновлен
                            </p>
                            <p className="text-xs text-muted-foreground">
                              2 часа назад
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon
                            name="Upload"
                            className="h-4 w-4 text-blue-500"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              Создан бэкап сайта example.com
                            </p>
                            <p className="text-xs text-muted-foreground">
                              6 часов назад
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon
                            name="AlertTriangle"
                            className="h-4 w-4 text-yellow-500"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              Превышен лимит трафика на 75%
                            </p>
                            <p className="text-xs text-muted-foreground">
                              1 день назад
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Скорость отклика</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        234 ms
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Среднее время отклика за 24 часа
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Нагрузка сервера</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        1.24
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Текущая средняя нагрузка
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="security" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Статус безопасности</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Icon
                          name="Shield"
                          className="h-5 w-5 text-green-500"
                        />
                        <span className="font-medium text-green-600">
                          Защищено
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">SSL сертификат</span>
                          <Badge variant="outline" className="text-green-600">
                            Активен
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Firewall</span>
                          <Badge variant="outline" className="text-green-600">
                            Включен
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Антивирус</span>
                          <Badge variant="outline" className="text-green-600">
                            Обновлен
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Последние угрозы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        За последние 30 дней угрозы не обнаружены
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки аккаунта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Уведомления по email</p>
                          <p className="text-sm text-muted-foreground">
                            Получать уведомления о статусе сервисов
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Настроить
                        </Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Автоматические бэкапы</p>
                          <p className="text-sm text-muted-foreground">
                            Ежедневные резервные копии
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Включить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Тарифные планы
            </h3>
            <p className="text-xl text-gray-600">
              Выберите подходящий план для вашего проекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">₽/мес</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-500 mr-3"
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h3>
            <p className="text-xl text-gray-600">
              Комплексные решения для вашего онлайн-присутствия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon
                      name={service.icon as any}
                      className="h-8 w-8 text-primary"
                    />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                О нашей платформе
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Мы предоставляем надежные хостинг-услуги с 2015 года, обслуживая
                более 10,000 клиентов по всему миру. Наша миссия — обеспечить
                стабильную и безопасную работу ваших проектов.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    99.97%
                  </div>
                  <p className="text-gray-600">Гарантированный аптайм</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600">Техническая поддержка</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    10K+
                  </div>
                  <p className="text-gray-600">Довольных клиентов</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <p className="text-gray-600">Лет на рынке</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg p-8">
              <div className="text-center">
                <Icon
                  name="Award"
                  className="h-16 w-16 text-primary mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold mb-4">
                  Сертифицированное качество
                </h4>
                <p className="text-gray-600">
                  Наши услуги соответствуют международным стандартам качества и
                  безопасности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h3>
            <p className="text-xl text-gray-600">
              Готовы помочь с любыми вопросами
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Phone"
                  className="h-8 w-8 text-primary mx-auto mb-4"
                />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-sm text-gray-500">Пн-Пт, 9:00-18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Mail"
                  className="h-8 w-8 text-primary mx-auto mb-4"
                />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">support@hostplatform.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="MessageCircle"
                  className="h-8 w-8 text-primary mx-auto mb-4"
                />
                <CardTitle>Онлайн чат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Доступен 24/7</p>
                <Button className="mt-2">Начать чат</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Server" className="text-primary" size={24} />
                <h4 className="text-xl font-bold">HostPlatform</h4>
              </div>
              <p className="text-gray-400">
                Надежный хостинг для профессионалов и растущего бизнеса
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Веб-хостинг
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    VPS серверы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Выделенные серверы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    SSL сертификаты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    База знаний
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Статус сервисов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Партнеры
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HostPlatform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
