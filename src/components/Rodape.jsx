import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcPaypal,
    faCcDiscover
} from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#111', color: '#fff', padding: '40px 20px', marginTop: '60px' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '20px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {/* Newsletter Section */}
                <div style={{ flex: '1 1 300px' }}>
                    <h3 style={{ marginBottom: '10px' }}>Newsletter</h3>
                    <p>Assine e receba novidades e promoções exclusivas!</p>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            style={{ padding: '10px', borderRadius: '6px', border: 'none' }}
                        />
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            style={{ padding: '10px', borderRadius: '6px', border: 'none' }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '10px',
                                borderRadius: '6px',
                                border: 'none',
                                backgroundColor: '#4F46E5',
                                color: '#fff',
                                cursor: 'pointer'
                            }}
                        >
                            Assinar
                        </button>
                    </form>
                </div>

                {/* Institutional Links */}
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ marginBottom: '10px' }}>Institucional</h3>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                        {[
                            'Quem somos',
                            'Envio e Frete Grátis',
                            'Depoimentos de Clientes',
                            'Notícias',
                            'Revenda',
                            'Trocas e Devoluções',
                            'Política de Privacidade',
                            'Influencer',
                            'Fale Conosco',
                            'Trabalhe Conosco'
                        ].map((item, i) => (
                            <li key={i} style={{ cursor: 'pointer' }}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ marginBottom: '10px' }}>Contato</h3>
                    <p>
                        <strong>Telefone Comercial:</strong>
                        <br /> (11) 1234-5678
                    </p>
                    <p>
                        <strong>WhatsApp:</strong>
                        <br /> (11) 91234-5678
                    </p>
                    <p>
                        <strong>E-mail:</strong>
                        <br /> contato@theblockside.com
                    </p>
                    <p>
                        <strong>Horário de Atendimento:</strong>
                        <br /> Seg–Sex: 9h–18h
                    </p>
                </div>

                {/* Selo de Segurança */}
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
                    <h3 style={{ marginBottom: '8px' }}>Selos de Segurança</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FontAwesomeIcon icon={faLock} style={{ color: '#4F46E5' }} />
                        <span>Site Seguro</span>
                    </div>

                    {/* Formas de Pagamento */}
                    <h3 style={{ margin: '16px 0 8px' }}>Formas de Pagamento</h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        {[faCcVisa, faCcMastercard, faCcAmex, faCcPaypal, faCcDiscover].map((icon, idx) => (
                            <FontAwesomeIcon key={idx} icon={icon} size="2x" />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
