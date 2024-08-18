import s from './JSXinfo.module.scss';
import '../../index.scss'
function JSXinfo() {
    return (
        <div>
            <div className="block">
                <h2>Що таке JSX?</h2>
                <div>JSX (JavaScript XML) — це синтаксичне розширення JavaScript, яке дозволяє писати HTML-подібний код
                    всередині JavaScript. Він виглядає як HTML, але є потужнішим, оскільки дозволяє використовувати
                    JavaScript-вирази всередині розмітки.
                </div>
            </div>
            <div className="block">
                <h2>Основні принципи JSX</h2>
                <ul>
                    <li>Вигляд: JSX виглядає як HTML, але він використовується всередині JavaScript.</li>
                    <li>JavaScript-вирази: Всередині JSX можна використовувати будь-які JavaScript-вирази, оточуючи їх
                        фігурними дужками {}.
                    </li>
                    <li>Атрибути: Атрибути у JSX дуже схожі на HTML-атрибути, але деякі з них використовують camelCase
                        (наприклад, className замість class).
                    </li>
                    <li>Фрагменти: Ви можете обертати елементи в React.Fragment (або використовувати порожній
                        тег <> ... </>) для групування без додаткового DOM-елемента.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default JSXinfo;
